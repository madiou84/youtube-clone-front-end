import {Fragment, useState} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {Bars3Icon, EllipsisVerticalIcon, MagnifyingGlassIcon, UserCircleIcon} from '@heroicons/react/24/outline';
import {MicrophoneIcon} from '@heroicons/react/24/solid';
// @ts-ignore
import {Icon} from "@/utils/Icon";
import {classNames, navigation} from "../../../utils";
import {MobileMenu} from "./MobileMenu";

export default function Navigation() {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white">
            <MobileMenu open={open} setOpen={setOpen}/>

            <header className="relative bg-white">
                <nav aria-label="Top" className="mx-auto max-w-screen-2xl px-4 sm:px-4 lg:px-4">
                    <div className="border-b border-gray-200">
                        <div className="w-full flex h-16 items-center">
                            <button
                                type="button"
                                onClick={() => setOpen(true)}
                                className="rounded-md bg-white p-2 text-gray-400 lg:block hidden"
                            >
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                            </button>

                            <div className="w-full flex lg:justify-between items-center">

                                {/* Logo */}
                                <div className="lg:ml-4 flex">
                                    <Icon name="youtube" className="w-24 h-auto">
                                        <sup className="text-xs uppercase text-gray-500">fr</sup>
                                    </Icon>
                                </div>

                                {/* Flyout menus */}
                                <Popover.Group className="hidden lg:ml-8 lg-:block lg:self-stretch">
                                    <div className="flex h-full space-x-8">
                                        {navigation.categories.map((category) => (
                                            <Popover key={category.name} className="flex">
                                                {({open}) => (
                                                    <>
                                                        <div className="relative flex">
                                                            <Popover.Button
                                                                className={classNames(
                                                                    open
                                                                        ? 'border-indigo-600 text-indigo-600'
                                                                        : 'border-transparent text-gray-700 hover:text-gray-800',
                                                                    'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                                                                )}
                                                            >
                                                                {category.name}
                                                            </Popover.Button>
                                                        </div>

                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-200"
                                                            enterFrom="opacity-0"
                                                            enterTo="opacity-100"
                                                            leave="transition ease-in duration-150"
                                                            leaveFrom="opacity-100"
                                                            leaveTo="opacity-0"
                                                        >
                                                            <Popover.Panel
                                                                className="absolute inset-x-0 top-full text-sm text-gray-500">
                                                                {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                                <div
                                                                    className="absolute inset-0 top-1/2 bg-white shadow"
                                                                    aria-hidden="true"/>

                                                                <div className="relative bg-white">
                                                                    <div className="mx-auto max-w-7xl px-8">
                                                                        <div
                                                                            className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                                                            <div
                                                                                className="col-start-2 grid grid-cols-2 gap-x-8">
                                                                                {category.featured.map((item) => (
                                                                                    <div key={item.name}
                                                                                         className="group relative text-base sm:text-sm">
                                                                                        <div
                                                                                            className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                                            <img
                                                                                                src={item.imageSrc}
                                                                                                alt={item.imageAlt}
                                                                                                className="object-cover object-center"
                                                                                            />
                                                                                        </div>
                                                                                        <a href={item.href}
                                                                                           className="mt-6 block font-medium text-gray-900">
                                                                                        <span
                                                                                            className="absolute inset-0 z-10"
                                                                                            aria-hidden="true"/>
                                                                                            {item.name}
                                                                                        </a>
                                                                                        <p aria-hidden="true"
                                                                                           className="mt-1">
                                                                                            Shop now
                                                                                        </p>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                            <div
                                                                                className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                                                                {category.sections.map((section) => (
                                                                                    <div key={section.name}>
                                                                                        <p id={`${section.name}-heading`}
                                                                                           className="font-medium text-gray-900">
                                                                                            {section.name}
                                                                                        </p>
                                                                                        <ul
                                                                                            role="list"
                                                                                            aria-labelledby={`${section.name}-heading`}
                                                                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                        >
                                                                                            {section.items.map((item) => (
                                                                                                <li key={item.name}
                                                                                                    className="flex">
                                                                                                    <a href={item.href}
                                                                                                       className="hover:text-gray-800">
                                                                                                        {item.name}
                                                                                                    </a>
                                                                                                </li>
                                                                                            ))}
                                                                                        </ul>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Popover.Panel>
                                                        </Transition>
                                                    </>
                                                )}
                                            </Popover>
                                        ))}

                                        {navigation.pages.map((page) => (
                                            <a
                                                key={page.name}
                                                href={page.href}
                                                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                            >
                                                {page.name}
                                            </a>
                                        ))}
                                    </div>
                                </Popover.Group>

                                {/* Search input */}
                                <div className="w-full max-w-2xl mx-auto hidden lg:block">
                                    <form className="flex items-center">
                                        <label htmlFor="voice-search" className="sr-only">
                                            Search
                                        </label>
                                        {/* Input */}
                                        <div className="relative w-full">
                                            <div
                                                className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                <MagnifyingGlassIcon className="w-5 h-5 text-gray-500"/>
                                            </div>
                                            <input
                                                type="text"
                                                id="voice-search"
                                                placeholder="Rechercher"
                                                className="bg-gray-50 border border-gray-300/50 text-gray-600 placeholder-gray-400 text-sm rounded-l block w-full pl-10 p-2.5
                                                -dark:bg-gray-700 -dark:border-gray-600 -dark:placeholder-gray-400 -dark:text-white -dark:focus:ring-blue-500 -dark:focus:border-blue-500"
                                            />
                                        </div>

                                        {/* Icons after search input */}
                                        <button
                                            type="button"
                                            className="inline-flex items-center py-2.5 px-4 text-sm bg-gray-100/60 font-medium text-white rounded-r border-y border-r border-gray-300
                                            focus:outline-outline outline-offset-2 outline-1
                                            -dark:bg-gray-600 -dark:hover:bg-gray-700 -dark:focus:ring-gray-800"
                                        >
                                            <MagnifyingGlassIcon className="mx-2 w-5 h-5 text-gray-500"/>
                                        </button>
                                        <div className="px-2.5">
                                            <button
                                                className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100/60">
                                                <MicrophoneIcon className="w-5 h-5 text-gray-800"/>
                                            </button>
                                        </div>
                                    </form>
                                </div>


                                <div className="w-full lg:w-auto flex items-center">
                                    <button className="">
                                        <EllipsisVerticalIcon className="mr-4 w-6 h-6" />
                                    </button>
                                    <div
                                        className="flex flex-1 items-center justify-end space-x-6">
                                        <a
                                            href="#"
                                            style={{ color: "#1463D6" }}
                                            className="flex items-center text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200 font-semibold hover:bg-blue-100"
                                        >
                                            <UserCircleIcon className="mr-1 w-6 h-6"/> Se connecter
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

import {
    PaperAirplaneIcon, PlusCircleIcon,
    VideoCameraIcon, VideoCameraSlashIcon
} from "@heroicons/react/24/outline";
import {
    BuildingStorefrontIcon, HomeIcon, MusicalNoteIcon, TruckIcon
} from "@heroicons/react/24/solid";
import { useState } from "react";

import { YoutubePropsItem } from "../../hoocks/useYoutube";
import { AuthButton } from "../../shared/AuthButton";
import FloatingButton from "../../shared/FloatingButton";
import Separator from "../../shared/Separator";
import YoutubeVideo from "../../shared/YoutubeVideo";
import YoutubeVideos from "../../shared/YoutubeVideos";
import { badgeTextContents, data } from "../../utils";
import Badge from "./components/Badge";
import Badges from "./components/Badges";
import Navigation from "./components/Navigation";
import SideBar from "./components/SideBar";

const dataSideBar1 = [
    {
        id: 1,
        active: true,
        title: "Accueil",
        icon: (className: string, ...props: any) => <HomeIcon {...props} className={className}/>
    },
    {
        id: 2,
        active: false,
        title: "Explorer",
        icon: (className: string, ...props: any) => <PaperAirplaneIcon {...props} className={className}/>
    },
    {
        id: 3,
        active: false,
        title: "Short",
        icon: (className: string, ...props: any) => <VideoCameraSlashIcon {...props} className={className}/>
    },
    {
        id: 4,
        active: false,
        title: "Abonnement",
        icon: (className: string, ...props: any) => <VideoCameraIcon {...props} className={className}/>
    }
];
const dataSideBar2 = [
    {
        id: 5,
        active: false,
        title: "Bibliothèque",
        icon: (className: string, ...props: any) => <PaperAirplaneIcon {...props} className={className}/>
    },
    {
        id: 6,
        active: false,
        title: "Historique",
        icon: (className: string, ...props: any) => <VideoCameraSlashIcon {...props} className={className}/>
    }
];
const explorerData = [
    {
        id: 1,
        active: false,
        title: "Musique",
        icon: (className: string, ...props: any) => <MusicalNoteIcon {...props} className={className}/>
    },
    {
        id: 2,
        active: false,
        title: "Sport",
        icon: (className: string, ...props: any) => <BuildingStorefrontIcon {...props} className={className}/>
    },
    {
        id: 3,
        active: false,
        title: "Jeux vidéo",
        icon: (className: string, ...props: any) => <TruckIcon {...props} className={className}/>
    },
    {
        id: 4,
        active: false,
        title: "Films et TV",
        icon: (className: string, ...props: any) => <PlusCircleIcon {...props} className={className}/>
    },
    {
        id: 5,
        active: false,
        title: "Actualités",
        icon: (className: string, ...props: any) => <PlusCircleIcon {...props} className={className}/>
    },
    {
        id: 5,
        active: false,
        title: "En direct",
        icon: (className: string, ...props: any) => <PlusCircleIcon {...props} className={className}/>
    },
    {
        id: 5,
        active: false,
        title: "Mode et beauté",
        icon: (className: string, ...props: any) => <PlusCircleIcon {...props} className={className}/>
    },
    {
        id: 5,
        active: false,
        title: "Savoirs & Cultures",
        icon: (className: string, ...props: any) => <PlusCircleIcon {...props} className={className}/>
    },
    {
        id: 5,
        active: false,
        title: "Vidéo à 360°",
        icon: (className: string, ...props: any) => <PlusCircleIcon {...props} className={className}/>
    },
];
const dataSideBar4 = [
    {
        id: 1,
        active: false,
        title: "Chaînes",
        icon: (className: string, ...props: any) => <PlusCircleIcon {...props} className={className}/>
    },
];
const dataSideBar5 = [
    {
        id: 1,
        active: false,
        title: "YouTube Premium",
        icon: (className: string, ...props: any) => <HomeIcon {...props} className={className}/>
    },
    {
        id: 2,
        active: false,
        title: "YouTube Music",
        icon: (className: string, ...props: any) => <PaperAirplaneIcon {...props} className={className}/>
    },
    {
        id: 3,
        active: false,
        title: "YouTube Kids",
        icon: (className: string, ...props: any) => <VideoCameraSlashIcon {...props} className={className}/>
    },
    {
        id: 4,
        active: false,
        title: "YouTube TV",
        icon: (className: string, ...props: any) => <VideoCameraIcon {...props} className={className}/>
    }
];
const dataSideBar6 = [
    {
        id: 1,
        active: false,
        title: "Paramètres",
        icon: (className: string, ...props: any) => <HomeIcon {...props} className={className}/>
    },
    {
        id: 2,
        active: false,
        title: "Historique des signalements",
        icon: (className: string, ...props: any) => <PaperAirplaneIcon {...props} className={className}/>
    },
    {
        id: 3,
        active: false,
        title: "Aide",
        icon: (className: string, ...props: any) => <VideoCameraSlashIcon {...props} className={className}/>
    },
    {
        id: 4,
        active: false,
        title: "Envoyer des commentaires",
        icon: (className: string, ...props: any) => <VideoCameraIcon {...props} className={className}/>
    }
];

export default function Home() {
    const [videos, ] = useState<YoutubePropsItem[]>(data)

    return (
        <div>
            <div className="fixed top-0 h-20 w-full mb-12 z-10">
                <Navigation/>
            </div>
            <main className="lg:flex w-full lg:content-start lg:items-start lg:gap-x-2 lg:pt-16">
                <aside className="hidden lg:block w-1/6 max-h-[49rem] overflow-y-auto">
                    <div className="fixed w-1/6 max-h-[49rem] overflow-scroll pr-4">
                        <SideBar data={dataSideBar1}/>
                        <Separator orientation="vertical"/>
                        <SideBar data={dataSideBar2}/>
                        <Separator orientation="vertical"/>
                        <SideBar>
                            <div className="flex flex-col py-2">
                                <div className="px-7 py-2 text-sm">
                                    Connectez-vous à YouTube pour cliquer sur "J'aime", ajouter un commentaire et vous
                                    abonner.
                                </div>

                                <AuthButton showEllipsis={false} className="justify-start px-5">
                                    Se connecter
                                </AuthButton>
                            </div>
                        </SideBar>
                        <Separator orientation="vertical"/>
                        <SideBar
                            data={explorerData}
                            sideBarTitle="EXPLORER"
                            iconClassName="text-zinc-100 bg-zinc-500 rounded-full"
                        />
                        <Separator orientation="vertical"/>
                        <SideBar data={dataSideBar4}/>
                        <Separator orientation="vertical"/>
                        <SideBar data={dataSideBar5} sideBarTitle="AUTRES CONTENUS YOUTUBE"/>
                        <Separator orientation="vertical"/>
                    </div>
                </aside>
                <article className="w-full lg:w-5/6">
                    <div
                        className="w-full flex justify-center items-center bg-white fixed top-14 h-14 z-20 border-y mt-1 border-gray-300">
                        <Badges className="overflow-x-auto flex space-x-1 lg:space-x-3 px-2 mx-auto lg:px-3 relative">
                            <FloatingButton/>
                            {badgeTextContents.map(({title, active}, key) => (
                                <Badge key={key} className="flex-none py-4" active={active}>
                                    <div className="flex flex-col items-center justify-center gap-1">
                                        {title}
                                    </div>
                                </Badge>
                            ))}
                        </Badges>
                    </div>
                    <YoutubeVideos className="pt-32 lg:pt-14 mt-0 lg:mt-3 p-4 lg:p-6">
                        {videos.map(video => (
                            <YoutubeVideo key={video.etag} video={video}/>
                        ))}
                    </YoutubeVideos>
                </article>
            </main>
        </div>
    );
}

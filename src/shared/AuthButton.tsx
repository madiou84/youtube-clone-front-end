import {EllipsisVerticalIcon, UserCircleIcon} from "@heroicons/react/24/outline";
import {classNames} from "../utils";

type AuthButtonProps = {
    [key: string]: any;
}

export function AuthButton({children, showEllipsis = true, className = "justify-end"}: AuthButtonProps) {
    return (
        <div className={classNames("flex flex-1 items-center space-x-1", className)}>
            <EllipsisVerticalIcon className={classNames("w-6 h-6", !showEllipsis && "hidden")}/>
            <a
                href="#"
                style={{color: "#1463D6"}}
                className="flex items-center text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200 font-semibold hover:bg-blue-100"
            >
                <UserCircleIcon className="mr-0 lg:mr-1 w-6 h-6"/>
                <span className="hidden lg:block">
                    {children}
                </span>
            </a>
        </div>
    );
}

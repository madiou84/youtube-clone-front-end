import {classNames} from "../utils";

type VideoProps = {
    [key: string]: any,
}

export default function YoutubeVideos({children, className, ...rest}: VideoProps) {
    return (
        <div
            {...rest}
            className={classNames("w-full bg-gray-100 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4", className)}
        >
            {children}
        </div>
    );
}

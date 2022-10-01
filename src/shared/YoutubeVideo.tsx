import {classNames} from "../utils";
import {YoutubePropsItem} from "../hoocks/useYoutube";

type VideoProp = {
    video: YoutubePropsItem,
    [key: string]: any,
}

export default function YoutubeVideo({className, video, ...rest}: VideoProp) {
    return (
        <div className={classNames("group relative", className)} {...rest}>
            <div
                className="lg:h-40 min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 group-hover:opacity-75 lg:aspect-none">
                <img
                    src={video.snippet.thumbnails.high.url}
                    alt={video.snippet.thumbnails.high.url}
                    width={video.snippet.thumbnails.high.width}
                    height={video.snippet.thumbnails.high.height}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href={video.snippet.thumbnails.high.url}>
                            <span aria-hidden="true" className="absolute inset-0"/>
                            {video.snippet.title}
                        </a>
                    </h3>
                    {/*<p className="mt-1 text-sm text-gray-500">{video.color}</p>*/}
                </div>
                {/*<p className="text-sm font-medium text-gray-900">{video.price}</p>*/}
            </div>
        </div>
    )
}

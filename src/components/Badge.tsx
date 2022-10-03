import {classNames} from "../utils";

type BadgeProps = {
    [rest: string]: any;
}

export default function Badge({children, active, className, ...rest}: BadgeProps) {
    return (
        <div className={className}>
            <button
                {...rest}
                type="button"
                className={classNames(
                    "px-3 py-1.5 text-sm w-auto rounded-full",
                    active ? "text-gray-100 bg-zinc-900" : "text-zinc-900 bg-zinc-200/70 border border-gray-300")
                }
            >
                {children}
            </button>
        </div>
    )
}

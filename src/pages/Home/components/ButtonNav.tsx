import {classNames} from "../../../utils";

type ButtonNavProps = {
    [key: string]: any;
}

export default function ButtonNav({active, className, children, activeClass = "bg-zinc-200/70 font-medium", ...rest}: ButtonNavProps) {
    return (
        <button
            {...rest}
            type="button"
            className={classNames("block w-full py-2 px-4", active ? activeClass : null, className)}
        >
            {children}
        </button>
    );
}

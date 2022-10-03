import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import {classNames} from "../utils";

interface ButtonNavProps {
    [key: string]: any;
    to: string;
}

export default function ButtonNav({ active, className, children, to, activeClass = "bg-zinc-200/70 font-medium", ...rest }: PropsWithChildren<ButtonNavProps>) {
    return (
        <Link
            to={to}
            {...rest}
            className={classNames("block w-full py-2 px-4", active ? activeClass : null, className)}
        >
            {children}
        </Link>
    );
}

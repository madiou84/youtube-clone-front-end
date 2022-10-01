import {classNames} from "../utils";

type SeparatorProps = {
    [key: string]: any,
    orientation: "vertical" | "horizontal"
}

export default function Separator({orientation, className, ...rest}: SeparatorProps) {
    return (
        <div
            {...rest}
            className={classNames(className, "my-2 border-gray-300", orientation === "vertical" ? "border-t" : "border-b")}
        />
    );
}

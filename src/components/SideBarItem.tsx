import ButtonNav from "./ButtonNav";
import { classNames } from "../utils";

interface SideBarItemProps {
    [key: string]: any;
    to: string;
};

export function SideBarItem({children, className, to, ...rest}: SideBarItemProps) {
    return (
        <ButtonNav to={to} {...rest} className={classNames("flex items-center", className)}>
            {children}
        </ButtonNav>
    )
}

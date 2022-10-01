import ButtonNav from "./ButtonNav";
import {classNames} from "../../../utils";

type SideBarItemProps = {
    [key: string]: any;
};

export function SideBarItem({children, className, ...rest}: SideBarItemProps) {
    return (
        <ButtonNav {...rest} className={classNames("flex items-center", className)}>
            {children}
        </ButtonNav>
    )
}

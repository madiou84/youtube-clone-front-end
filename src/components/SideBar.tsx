import {classNames} from "../utils";
import {SideBarItem} from "./SideBarItem";

type SideBarProps = {
    [key: string]: any;
};

export function SideBarLeftContainer({children, ...rest}: SideBarProps) {
    return (
        <div {...rest}>
            {children}
        </div>
    );
}

export default function SideBar({data, sideBarTitle, className, iconClassName, children, ...rest}: SideBarProps) {
    let content;
    if (children) {
        content = children
    } else {
        content = <div className={className}>
            {sideBarTitle && <h4 className="px-6 py-2 text-gray-500 text-sm font-semibold">{sideBarTitle}</h4>}
            {data.map((item: any, index: number) => (
                <SideBarItem to={item.to} key={index} className="flex text-sm" active={item.active}>
                    {item.icon(classNames(iconClassName, "ml-2 mr-5 w-5 h-5"))}
                    <p className="truncate" title={item.title}>
                        {item.title}
                    </p>
                </SideBarItem>
            ))}
        </div>;
    }

    return (
        <SideBarLeftContainer {...rest}>
            {content}
        </SideBarLeftContainer>
    );
}

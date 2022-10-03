type BadgesProps = {
    [rest: string]: any;
}

export default function Badges({children, ...rest}: BadgesProps) {
    return (
        <div {...rest}>
            {children}
        </div>
    )
}

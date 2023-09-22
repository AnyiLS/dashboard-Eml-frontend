import React from "react";
import {Link} from "react-router-dom";
/** Local Modules */
import useControllers from "controllers";
/** Styles */
import {ActiveBar, IconSpan, ListItem} from "./LinkSidebar.styles.ts";

interface ILinkSidebar {
    to: string;
    icon?: JSX.Element;
    path: string;
    name: string;
}

const LinkSidebar: React.FC<ILinkSidebar> = ({to, icon, name, path}): JSX.Element => {
    /** Controllers */
    const {useComponentsHooks} = useControllers();
    const {useLinkSidebar} = useComponentsHooks();
    const {activeRoute} = useLinkSidebar();

    return (
        <li>
            <Link to={to}>
                <div className="relative flex hover:cursor-pointer">
                    <ListItem active={activeRoute(path)}>
                        <IconSpan active={activeRoute(path)}>
                            {icon ? icon : null}
                        </IconSpan>
                        <p>{name}</p>
                    </ListItem>
                    {activeRoute(path) ? <ActiveBar active={activeRoute(path)} /> : null}
                </div>
            </Link>
        </li>
    );
}

export default LinkSidebar;
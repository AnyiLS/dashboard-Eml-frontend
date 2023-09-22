import React from "react";
import {HiX} from "react-icons/hi";
/** Local Modules */
import useViews from "views";
import useControllers from "controllers";
/** Styles */
import {CloseButton, HorizontalLine, SidebarContainer, Title} from "./Sidebar.styles";
/** Interfaces & Types */
import type {IRoutesSidebar, ILinksSidebar} from "controllers/local-components/sidebar";

interface ISidebar {
    open: boolean;
    onClose: React.MouseEventHandler<HTMLSpanElement>;
}

const Sidebar: React.FC<ISidebar> = ({open, onClose}): JSX.Element => {
    /** Views */
    const {useComponents} = useViews();
    const {Separator, LinkSidebar} = useComponents();

    /** Controllers */
    const {useLocalComponentsHooks} = useControllers();
    const {useSidebar} = useLocalComponentsHooks();
    const {routes} = useSidebar();

    return (
        <SidebarContainer open={open}>
            <CloseButton onClick={onClose}>
                <HiX/>
            </CloseButton>
            <Title>
                <div className="title-text">
                    <img src="https://eml.co/page/img/logo.png" alt=""/>
                </div>
            </Title>
            <ul className="mb-auto pt-1">
                {
                    routes.map((item: IRoutesSidebar, index: number) => (
                        <React.Fragment key={index}>
                            <Separator description={item.title}/>
                            {
                                item.links.map((link: ILinksSidebar, ind: number) => (
                                    <LinkSidebar {...link} key={ind}/>
                                ))
                            }
                        </React.Fragment>
                    ))
                }
            </ul>
        </SidebarContainer>
    );
}

export default Sidebar;
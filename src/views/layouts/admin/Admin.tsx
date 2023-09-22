import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
/** Local Modules */
import useViews from "views";
import useControllers from "controllers";
/** Styles */
import {
    ContentContainer,
    MainContainer, MainContent, RoutesContainer,
} from "./Admin.styles.ts";


interface IAdmin {
    [x: string]: any;
}

const Admin: React.FC<IAdmin> = ({...rest}): JSX.Element => {
    document.documentElement.dir = "ltr";
    /** Views */
    const {useLocalComponents} = useViews();
    const {Navbar, Sidebar} = useLocalComponents();

    /** Controllers */
    const {useLayoutsHooks} = useControllers();
    const {useAdmin} = useLayoutsHooks();
    const {
        open,
        currentRoute,
        handleCloseSidebar,
        handleOpenSidebar,
        getActiveNavbar,
        routes,
        getRoutes
    } = useAdmin();

    return (
        <MainContainer>
            <Sidebar open={open} onClose={handleCloseSidebar} />
            <ContentContainer>
                <MainContent>
                    <RoutesContainer>
                        <Navbar
                            onOpenSidenav={handleOpenSidebar}
                            brandText={currentRoute}
                            secondary={getActiveNavbar(routes())}
                            {...rest}
                        />
                        <div className="pt-[20px] mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
                            <Routes>
                                {getRoutes(routes())}
                                <Route path="/" element={<Navigate to="/admin/user" replace />} />
                            </Routes>
                        </div>
                        <div className="p-3">
                            {/*<Footer />*/}
                        </div>
                    </RoutesContainer>
                </MainContent>
            </ContentContainer>
        </MainContainer>
    );
}

export default Admin;
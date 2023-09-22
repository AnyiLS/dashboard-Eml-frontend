import React from "react";
import {Route, useLocation} from "react-router-dom";
/** Local Modules */
import routes, {Routes} from "routes/routes.tsx";

const useAdmin = () => {
    /** Variables */
    const location = useLocation();

    /** States */
    const [open, setOpen] = React.useState<boolean>(true);
    const [currentRoute, setCurrentRoute] = React.useState<string>("Main Dashboard");

    const handleCloseSidebar = () => setOpen(false);

    const handleOpenSidebar = () => setOpen(true);

    const getActiveRoute = (routes: Routes[]): string | boolean => {
        let activeRoute = "Main Dashboard";
        for (let i = 0; i < routes.length; i++) {
            if (
                window.location.href.indexOf(
                    routes[i].layout + "/" + routes[i].path
                ) !== -1
            ) {
                setCurrentRoute(routes[i].name);
            }
        }
        return activeRoute;
    };

    const getActiveNavbar = (routes: Routes[]): string | boolean | undefined => {
        let activeNavbar = false;
        for (let i = 0; i < routes.length; i++) {
            if (
                window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
            ) {
                return routes[i].secondary;
            }
        }
        return activeNavbar;
    };

    const getRoutes = (routes: Routes[]): any => {
        return routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route path={`/${prop.path}`} element={prop.component} key={key} />
            );
            } else {
                return null;
            }
        });
    };

    React.useEffect(() => {
        window.addEventListener("resize", () =>
            window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
        );
    }, []);

    React.useEffect(() => {
        getActiveRoute(routes());
    }, [location.pathname]);

    return {
        location,
        open,
        currentRoute,
        routes,
        handleCloseSidebar,
        handleOpenSidebar,
        getActiveNavbar,
        getRoutes
    };
}


export default useAdmin;
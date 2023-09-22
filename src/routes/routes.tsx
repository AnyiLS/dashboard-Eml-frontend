import useViews from "views";

export interface Routes {
    path: string;
    component: JSX.Element;
    name: string;
    layout: string;
    secondary?: boolean;
}

const routes = (): Routes[] => {
    /** Views */
    const {useScreens} = useViews();
    const {Users, SEO, Statuses} = useScreens();

    return [
        {
            path: "users",
            component: <Users/>,
            name: "Usuarios",
            layout: "/admin",
        },
        {
            path: "seo",
            component: <SEO/>,
            name: "SEO",
            layout: "/admin",
        },
        {
            path: "statuses",
            component: <Statuses/>,
            name: "Estados",
            layout: "/admin",
        }
    ]
}

export default routes;
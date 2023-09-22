import React from "react";

const Users = React.lazy(() => import("./users"));
const SEO = React.lazy(() => import("./seo"));
const Statuses = React.lazy(() => import("./statuses"));

const useScreens = () => {
    return {
        Users,
        SEO,
        Statuses
    };
}


export default useScreens;
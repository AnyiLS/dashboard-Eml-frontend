import React from "react";

const useLinkSidebar = () => {
    const activeRoute = (routeName: string) => {
        return location.pathname.includes(routeName);
    };


    return {
        activeRoute
    };
}


export default useLinkSidebar;
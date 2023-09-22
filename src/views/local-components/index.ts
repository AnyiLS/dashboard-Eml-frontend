import React from "react";

const Navbar = React.lazy(() => import("./navbar"));
const Sidebar = React.lazy(() => import("./sidebar"));

const useLocalComponents = () => {
    return {
        Navbar,
        Sidebar
    };
}


export default useLocalComponents;
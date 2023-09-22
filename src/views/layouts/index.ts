import React from "react";

const Admin = React.lazy(() => import("./admin"));

const useLayouts = () => {
    return {
        Admin
    };
}

export default useLayouts;
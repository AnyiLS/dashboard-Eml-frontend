import React from "react";
import useStoreConfig from "./redux";
import useInterceptors from "./interceptors";

const useConfig = () => {
    return {
        useStoreConfig,
        useInterceptors
    };
}


export default useConfig;
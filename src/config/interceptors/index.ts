import React from "react";
import axios from "axios";

const useInterceptors = () => {
    React.useEffect(() => {
        axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;
    }, [])
}


export default useInterceptors;
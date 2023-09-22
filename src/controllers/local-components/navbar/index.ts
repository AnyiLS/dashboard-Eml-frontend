import React from "react";

const useNavbar = () => {
    /** States */
    const [darkMode, setDarkMode] = React.useState<boolean>(false);

    return {
        darkMode,
        setDarkMode
    };
}


export default useNavbar;
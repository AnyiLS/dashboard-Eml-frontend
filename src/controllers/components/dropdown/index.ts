import React from "react";

const useDropdown = () => {
    /** Refs */
    const wrapperRef = React.useRef<HTMLDivElement | null>(null);

    /** States */
    const [openWrapper, setOpenWrapper] = React.useState<boolean>(false);

    const handleCloseDropdown = () => setOpenWrapper(!openWrapper);

    React.useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setOpenWrapper(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [wrapperRef, setOpenWrapper]);

    return {
        openWrapper,
        wrapperRef,
        handleCloseDropdown
    };
}


export default useDropdown;
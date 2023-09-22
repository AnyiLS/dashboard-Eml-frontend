import React from "react";
/** Local Modules */
import useControllers from "controllers";

interface IDropdown {
    button: JSX.Element;
    children: JSX.Element;
    classNames: string;
    animation?: string;
}

const Dropdown: React.FC<IDropdown> = ({button, classNames, animation, children}): JSX.Element => {
    /** Controllers */
    const {useComponentsHooks} = useControllers();
    const {useDropdown} = useComponentsHooks();
    const {openWrapper, wrapperRef, handleCloseDropdown} = useDropdown();

    return (
        <div ref={wrapperRef} className="relative flex">
            <div className="flex w-[40px]" onMouseDown={handleCloseDropdown}>
                {button}
            </div>
            <div
                className={`${classNames} absolute z-10 ${
                    animation
                        ? animation
                        : "origin-top-right transition-all duration-300 ease-in-out"
                } ${openWrapper ? "scale-100" : "scale-0"}`}
            >
                {children}
            </div>
        </div>
    );
}

export default Dropdown;
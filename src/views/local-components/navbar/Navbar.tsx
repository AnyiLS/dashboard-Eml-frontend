import React from "react";
import {FiAlignJustify, FiSearch} from "react-icons/fi";
import {BsArrowBarUp} from "react-icons/bs";
import {IoMdInformationCircleOutline, IoMdNotificationsOutline} from "react-icons/io";
import {RiMoonFill, RiSunFill} from "react-icons/ri";
/** Local Modules */
import useViews from "views";
import useControllers from "controllers";
/** Assets */
import NavbarImage from "assets/img/layout/Navbar.png";
import avatar from "assets/img/avatars/avatar4.png";
/** Styles */
import {
    StyledA,
    StyledDarkModeToggle,
    StyledDropdownButton,
    StyledDropdownButtonHorizon,
    StyledDropdownContent,
    StyledDropdownContentHorizon,
    StyledHr,
    StyledImage,
    StyledInput,
    StyledInputWrapper,
    StyledLink, StyledLogoutLink,
    StyledNav,
    StyledP,
    StyledProfileDropdown,
    StyledProfileImage, StyledProfileLink,
    StyledProfileName,
    StyledSpan,
    StyledWrapper
} from "./Navbar.styles.ts";

interface INavbar {
    onOpenSidenav: () => void;
    brandText: string;
    secondary?: boolean | string;
}

const Navbar: React.FC<INavbar> = ({onOpenSidenav, brandText, secondary}): JSX.Element => {
    /** Views */
    const {useComponents} = useViews();
    const {Dropdown} = useComponents();

    /** Controllers */
    const {useLocalComponentsHooks} = useControllers();
    const {useNavbar} = useLocalComponentsHooks();
    const {darkMode, setDarkMode} = useNavbar();

    return (
        <StyledNav>
            <StyledWrapper>
                <div className="h-6 w-[224px] pt-1">
                    <StyledLink to=" ">Pages</StyledLink>
                    <StyledSpan>/</StyledSpan>
                    <StyledLink to="#">{brandText}</StyledLink>
                </div>
                <StyledP>
                    <StyledA href="#">
                        {brandText}
                    </StyledA>
                </StyledP>
            </StyledWrapper>

            <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
                <StyledInputWrapper>
                    <p className="pl-3 pr-2 text-xl">
                        <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
                    </p>
                    <StyledInput
                        type="text"
                        placeholder="Search..."
                    />
                </StyledInputWrapper>
                <StyledDropdownButton onClick={onOpenSidenav}>
                    <FiAlignJustify className="h-5 w-5" />
                </StyledDropdownButton>
                {/*<Dropdown*/}
                {/*    button={*/}
                {/*        <StyledDropdownButtonHorizon>*/}
                {/*            <IoMdNotificationsOutline className="h-4 w-4 text-gray-600 dark:text-white" />*/}
                {/*        </StyledDropdownButtonHorizon>*/}
                {/*    }*/}
                {/*    animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"*/}
                {/*    children={*/}
                {/*        <StyledDropdownContent>*/}
                {/*            <div className="flex items-center justify-between">*/}
                {/*                <p className="text-base font-bold text-navy-700 dark:text-white">*/}
                {/*                    Notification*/}
                {/*                </p>*/}
                {/*                <p className="text-sm font-bold text-navy-700 dark:text-white">*/}
                {/*                    Mark all read*/}
                {/*                </p>*/}
                {/*            </div>*/}

                {/*            <button className="flex w-full items-center">*/}
                {/*                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">*/}
                {/*                    <BsArrowBarUp />*/}
                {/*                </div>*/}
                {/*                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">*/}
                {/*                    <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">*/}
                {/*                        New Update: Horizon UI Dashboard PRO*/}
                {/*                    </p>*/}
                {/*                    <p className="font-base text-left text-xs text-gray-900 dark:text-white">*/}
                {/*                        A new update for your downloaded item is available!*/}
                {/*                    </p>*/}
                {/*                </div>*/}
                {/*            </button>*/}

                {/*            <button className="flex w-full items-center">*/}
                {/*                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">*/}
                {/*                    <BsArrowBarUp />*/}
                {/*                </div>*/}
                {/*                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">*/}
                {/*                    <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">*/}
                {/*                        New Update: Horizon UI Dashboard PRO*/}
                {/*                    </p>*/}
                {/*                    <p className="font-base text-left text-xs text-gray-900 dark:text-white">*/}
                {/*                        A new update for your downloaded item is available!*/}
                {/*                    </p>*/}
                {/*                </div>*/}
                {/*            </button>*/}
                {/*        </StyledDropdownContent>*/}
                {/*    }*/}
                {/*    classNames={"py-2 top-4 -left-[230px] md:-left-[440px] w-max"}*/}
                {/*/>*/}
                {/* start Horizon PRO */}
                {/*<Dropdown*/}
                {/*    button={*/}
                {/*        <StyledDropdownButtonHorizon>*/}
                {/*            <IoMdInformationCircleOutline className="h-4 w-4 text-gray-600 dark:text-white" />*/}
                {/*        </StyledDropdownButtonHorizon>*/}
                {/*    }*/}
                {/*    children={*/}
                {/*        <StyledDropdownContentHorizon>*/}
                {/*            <StyledImage*/}
                {/*                navbarimage=""*/}
                {/*            />*/}
                {/*            <a*/}
                {/*                target="blank"*/}
                {/*                href="https://horizon-ui.com/pro?ref=live-free-tailwind-react"*/}
                {/*                className="px-full linear flex cursor-pointer items-center justify-center rounded-xl bg-brand-500 py-[11px] font-bold text-white transition duration-200 hover:bg-brand-600 hover:text-white active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200"*/}
                {/*            >*/}
                {/*                Buy Horizon UI PRO*/}
                {/*            </a>*/}
                {/*            <a*/}
                {/*                target="blank"*/}
                {/*                href="https://horizon-ui.com/docs-tailwind/docs/react/installation?ref=live-free-tailwind-react"*/}
                {/*                className="px-full linear flex cursor-pointer items-center justify-center rounded-xl border py-[11px] font-bold text-navy-700 transition duration-200 hover:bg-gray-200 hover:text-navy-700 dark:!border-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:text-white dark:active:bg-white/10"*/}
                {/*            >*/}
                {/*                See Documentation*/}
                {/*            </a>*/}
                {/*            <a*/}
                {/*                target="blank"*/}
                {/*                href="https://horizon-ui.com/?ref=live-free-tailwind-react"*/}
                {/*                className="hover:bg-black px-full linear flex cursor-pointer items-center justify-center rounded-xl py-[11px] font-bold text-navy-700 transition duration-200 hover:text-navy-700 dark:text-white dark:hover:text-white"*/}
                {/*            >*/}
                {/*                Try Horizon Free*/}
                {/*            </a>*/}
                {/*        </StyledDropdownContentHorizon>*/}
                {/*    }*/}
                {/*    classNames={"py-2 top-6 -left-[250px] md:-left-[330px] w-max"}*/}
                {/*    animation="origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out"*/}
                {/*/>*/}
                {/*<StyledDarkModeToggle*/}
                {/*    onClick={() => {*/}
                {/*        if (darkMode) {*/}
                {/*            document.body.classList.remove("dark");*/}
                {/*            setDarkMode(false);*/}
                {/*        } else {*/}
                {/*            document.body.classList.add("dark");*/}
                {/*            setDarkMode(true);*/}
                {/*        }*/}
                {/*    }}*/}
                {/*>*/}
                {/*    {darkMode ? (*/}
                {/*        <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />*/}
                {/*    ) : (*/}
                {/*        <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />*/}
                {/*    )}*/}
                {/*</StyledDarkModeToggle>*/}
                {/* Profile & Dropdown */}
                <Dropdown
                    button={
                        <StyledProfileImage
                            className="h-10 w-10 rounded-full"
                            src={avatar}
                            alt="Elon Musk"
                        />
                    }
                    children={
                        <StyledProfileDropdown>
                            <div className="mt-3 ml-4">
                                <div className="flex items-center gap-2">
                                    <StyledProfileName>
                                        👋 Hey, Adela
                                    </StyledProfileName>
                                </div>
                            </div>
                            <StyledHr />
                            <div className="mt-3 ml-4 flex flex-col">
                                <StyledProfileLink href=" " className="text-sm text-gray-800 dark:text-white hover:dark:text-white">
                                    Profile Settings
                                </StyledProfileLink>
                                <StyledProfileLink href=" " className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white">
                                    Newsletter Settings
                                </StyledProfileLink>
                                <StyledLogoutLink href=" " className="mt-3 text-sm font-medium text-red-500 hover:text-red-500">
                                    Log Out
                                </StyledLogoutLink>
                            </div>
                        </StyledProfileDropdown>
                    }
                    classNames={"py-2 top-8 -left-[180px] w-max"}
                />
            </div>
        </StyledNav>
    );
}

export default Navbar;
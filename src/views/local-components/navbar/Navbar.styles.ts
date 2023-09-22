import styled from "styled-components";
import tw from "twin.macro";
import {Link} from "react-router-dom";

export const StyledNav = styled.nav`
  ${tw`sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl shadow-md dark:bg-[#0b14374d]`}
`;

export const StyledWrapper = styled.div`
  ${tw`ml-[6px]`}
`;

export const StyledLink = styled(Link)`
  ${tw`text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white`}
`;

export const StyledA = styled.a`
  ${tw`shrink font-bold text-[33px] capitalize text-navy-700 dark:text-white`}
`;

export const StyledSpan = styled.span`
  ${tw`mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white`}
`;

export const StyledNavLink = styled.a`
  ${tw`text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white`}
`;

export const StyledP = styled.p`
  ${tw`shrink text-[33px] capitalize text-navy-700 dark:text-white`}
`;

export const StyledInputWrapper = styled.div`
  ${tw`flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-full`}
`;

export const StyledInput = styled.input`
  ${tw`block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:placeholder:!text-white sm:w-fit`}
`;

export const StyledDropdownButton = styled.p`
  ${tw`cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden`}
`;

export const StyledDropdownContent = styled.div`
  ${tw`flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]`}
`;

export const StyledDropdownButtonHorizon = styled.p`
  ${tw`cursor-pointer text-xl text-gray-600 dark:text-white`}
`;

export const StyledDropdownContentHorizon = styled.div`
  ${tw`flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none`}
`;

export const StyledImage = styled.div<{navbarimage: string;}>`
  ${tw`mb-2 aspect-video w-full rounded-lg`}
  background-image: url(${({navbarimage}) => navbarimage});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledDarkModeToggle = styled.div`
  ${tw`cursor-pointer text-gray-600`}
`;

export const StyledProfileDropdown = styled.div`
  ${tw`flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none`}
`;

export const StyledProfileName = styled.p`
  ${tw`text-sm font-bold text-navy-700 dark:text-white`}
`;

export const StyledHr = styled.div`
  ${tw`mt-3 h-px w-full bg-gray-200 dark:bg-white/20`}
`;

export const StyledProfileLinks = styled.div`
  ${tw`mt-3 ml-4 flex flex-col`}
`;

export const StyledProfileLink = styled.a`
  ${tw`text-sm text-gray-800 dark:text-white hover:dark:text-white`}
`;

export const StyledLogoutLink = styled.a`
  ${tw`mt-3 text-sm font-medium text-red-500 hover:text-red-500`}
`;

export const StyledProfileImage = styled.img`
  ${tw`h-[40px] w-[40px] rounded-full`}
`;
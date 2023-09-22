import styled from "styled-components";
import tw from "twin.macro";

export const SidebarContainer = styled.div<{open: boolean;}>`
  ${tw`sm:bg-none duration-[175ms] w-[300px] ease-linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-lg transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0`}
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
`;

export const CloseButton = styled.span`
  ${tw`absolute top-4 right-4 block cursor-pointer xl:hidden`}
`;

export const Title = styled.div`
  ${tw`mx-auto mt-[20px] flex items-center mb-[15px]`}
  .title-text {
    ${tw`mt-1 ml-1 h-full font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white`}
  }
`;

export const HorizontalLine = styled.div`
  ${tw`mt-[58px] mb-7 h-px bg-[#374e9a75] dark:bg-white/30`}
`;
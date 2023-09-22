import styled from "styled-components";
import tw from "twin.macro";

export const MainContainer = styled.div`
  ${tw`flex h-full w-full`}
`;

export const ContentContainer = styled.div`
  ${tw`h-full w-full bg-lightPrimary dark:!bg-navy-900`}
`;

export const MainContent = styled.main`
  ${tw`mx-[12px] h-full flex-none transition-all md:pr-4 xl:ml-[313px]`}
`;

export const RoutesContainer = styled.div`
  ${tw`h-full`}
`;
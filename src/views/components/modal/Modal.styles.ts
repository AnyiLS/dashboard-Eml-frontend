import styled from "styled-components";
import tw from "twin.macro";

export const StyledModal = styled.div<{open: boolean;}>`
  ${({open}) => !open ? tw`hidden` : tw`flex`}
  ${tw`fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.4)] justify-center items-center z-[100]`}
`;

export const Card = styled.div`
  ${tw`shadow-[0_5px_10px_0_rgba(0,0,0,0.2)] bg-white rounded-[20px] max-w-[800px] w-full p-5`};
  
  @media (max-width: 800px) {
    ${tw`w-[90%] max-w-full`}
  }
`;

export const Title = styled.h2`
  ${tw`text-[25px] font-semibold uppercase border-b-[1px] border-solid border-[#eeeeee] text-navy-700 p-[10px]`}  
`;

export const BottomContainer = styled.div`
  ${tw`border-t-[1px] border-solid border-[#eeeeee] p-[10px] flex justify-end`}
`;
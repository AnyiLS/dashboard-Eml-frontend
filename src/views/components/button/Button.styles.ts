import styled from "styled-components";
import tw from "twin.macro";

export const StyledButton = styled.button<{color: string; text?: string;}>`
  ${({color}) => `background: ${color};`};
  ${({text}) => `color: ${text ?? "white"};`};
  ${tw`font-semibold leading-[1.71] tracking-[0.3px] min-w-[64px] uppercase select-none align-middle cursor-pointer justify-center relative box-border items-center inline-flex m-0 px-[1.375rem] py-[0.46875rem] rounded-[5px] border-0`};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
  box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
  border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
  color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  outline: 0;
  
  &:hover {
    ${tw`no-underline shadow-[0px_6px_18px_-8px_rgba(58,53,65,0.56)]`};
  }
`;

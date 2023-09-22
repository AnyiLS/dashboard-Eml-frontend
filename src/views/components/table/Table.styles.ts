import styled from "styled-components";
import tw from "twin.macro";

export const StyledTable = styled.table`
  ${tw`table w-full border-spacing-0 border-separate max-w-[1375px] overflow-x-scroll`}
  white-space: nowrap;
`;

export const StyledTHead = styled.thead`
  ${tw`table-header-group uppercase`}
`;

export const StyledHeadRow = styled.tr`
  ${tw`text-[inherit] table-row align-middle`};
  outline: 0;
  
  th {
    ${tw`text-xs font-semibold tracking-[0.13px] leading-6 text-[rgba(58,53,65,0.87)] table-cell text-left sticky z-[2] bg-[#F9FAFC] min-w-[170px] p-4 border-b-[rgba(58,53,65,0.12)] border-b border-solid top-0`};
    vertical-align: inherit;
  }
`;

export const StyledBody = styled.tbody`
  ${tw`table-row-group`}
  
  tr {
    ${tw`text-[inherit] table-row align-middle`};
    outline: 0;
  }
  
  td {
    ${tw`text-left table-cell font-normal text-sm leading-normal tracking-[0.25px] text-[rgba(58,53,65,0.68)] p-4 border-b-[rgba(58,53,65,0.12)] border-b border-solid`};
    vertical-align: inherit;
  }
`;

export const StyledPaginator = styled.div`
  ${tw`overflow-auto text-[rgba(58,53,65,0.87)] text-sm`}
  
  .paginator {
    ${tw`min-h-[52px] relative flex items-center text-[rgba(58,53,65,0.87)] text-sm pl-3 pr-0.5`}
    
    .spacer {
      ${tw`flex-[1_1_100%]`}
    }
    
    .row-description {
      ${tw`shrink-0 font-normal text-sm leading-normal tracking-[0.15px] text-[rgba(58,53,65,0.68)]`}
    }
    
    .items {
      ${tw`font-normal text-sm leading-normal tracking-[0.15px] text-[rgba(58,53,65,0.68)] shrink-0`};
    }
    
    .buttons {
      ${tw`shrink-0 ml-5`}
      
      .left-button, .right-button {
        ${tw`bg-[transparent] text-[rgba(58,53,65,0.3)] pointer-events-none cursor-pointer inline-flex items-center justify-center relative box-border select-none align-middle no-underline text-center text-2xl overflow-visible transition-[background-color] ease-in-out delay-[0ms] m-0 p-2 rounded-[50%] border-0`};
        outline: 0;
        
        svg {
          ${tw`select-none w-[1em] h-[1em] inline-block fill-[rgba(58,53,65,0.3)] shrink-0 transition-[fill] duration-[200ms] ease-in-out delay-[0ms] text-2xl`}
        }
      }
    }
  }
`;

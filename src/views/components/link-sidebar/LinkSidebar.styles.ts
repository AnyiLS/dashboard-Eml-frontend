import styled from "styled-components";
import tw from "twin.macro";

export const ListItem = styled.li<{active: boolean;}>`
  ${tw`my-[3px] flex cursor-pointer items-center  gap-[20px] h-[36px]`}
  ${({active}) =>
    active
        ? tw`font-bold text-brand-500 dark:text-white`
        : tw`font-medium text-gray-600`}
  
  p {
    ${({ active }) => active ? tw`text-[#374e9a]` : tw`text-gray-600`}
  }
`;

// Define los estilos para el ícono
export const IconSpan = styled.span<{active: boolean;}>`
  ${tw`leading-[20px] ml-4 flex`}
  ${({active}) =>
    active
        ? tw`font-bold text-[#374e9a] dark:text-white`
        : tw`font-medium text-gray-600`}
`;

// Define los estilos para la barra de estado activo
export const ActiveBar = styled.div<{active: boolean;}>`
  ${tw`absolute right-0 top-px h-9 w-1 rounded-lg`}
  background-color: ${({active}) =>
    active ? '#374e9a' : 'transparent'}; // Cambia el color de fondo aquí
`;
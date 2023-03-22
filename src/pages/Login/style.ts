import styled, { css } from "styled-components";
import pattern from "assets/imgs/pattern.jpg";

export const Login = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg2};
    background-image: url(${pattern});
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
  `}
`;

export const LoginContent = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    ${theme.mixins.overlay()};
    display: flex;
    justify-content: center;
    align-items: center; ;
  `}
`;


export const BoxLoginLogoImage = styled.img`
  ${() => css`
    width: 45%;
  `}
`;
import { createGlobalStyle } from 'styled-components';
import {
  Background,
  Black,
  SizeDefaultRem,
  SizeMaxWidth,
  SizeMiddleLargeRem,
  SizeMiddleRem,
  SizeRegularRem,
  Transparent,
} from 'src/styles/Common.style';
import {
  pretendardBoldWoff2,
  pretendardBoldWoff,
  pretendardBoldOtf,
  pretendardBoldTtf,
  pretendardLightWoff2,
  pretendardLightWoff,
  pretendardLightOtf,
  pretendardLightTtf,
  pretendardMediumWoff2,
  pretendardMediumWoff,
  pretendardMediumOtf,
  pretendardMediumTtf,
  pretendardRegularWoff2,
  pretendardRegularWoff,
  pretendardRegularOtf,
  pretendardRegularTtf,
} from 'src/assets/fonts';
import Device from 'src/styles/Device.style';

const GlobalStyle = createGlobalStyle`
  // **************** fonts ****************
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 300;
    src: url(${pretendardLightWoff2}) format("woff2"),
    url(${pretendardLightWoff}) format("woff"),
    url(${pretendardLightOtf}) format("opentype"),
    url(${pretendardLightTtf}) format("truetype"),
  }
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    src: url(${pretendardRegularWoff2}) format("woff2"),
    url(${pretendardRegularWoff}) format("woff"),
    url(${pretendardRegularOtf}) format("opentype"),
    url(${pretendardRegularTtf}) format("truetype"),
  }
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    src: url(${pretendardMediumWoff2}) format("woff2"),
    url(${pretendardMediumWoff}) format("woff"),
    url(${pretendardMediumOtf}) format("opentype"),
    url(${pretendardMediumTtf}) format("truetype"),
  }
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    src: url(${pretendardBoldWoff2}) format("woff2"),
    url(${pretendardBoldWoff}) format("woff"),
    url(${pretendardBoldOtf}) format("opentype"),
    url(${pretendardBoldTtf}) format("truetype"),
  }

  // **************** reset ****************
  * {
    margin: 0;
    padding: 0;
    font-size: inherit;
    box-sizing: border-box;
  }
  html {
    height: 100vh;
    font-size: ${SizeDefaultRem};
    font-family: Suite, sans-serif !important;
    font-weight: 300;
    color: ${Black};
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  body {
    width: 100%;
    max-width: ${SizeMaxWidth};
    height: 100%;
    margin: 0 auto;
    position: relative;
    background-color: ${Background};
    box-shadow: 0 0 ${SizeRegularRem} rgb(0 0 0 / 15%);
    
    > div{
      width: inherit;
      height: 100%;
      padding: ${SizeMiddleLargeRem} 0;
      overflow-y: auto;
      overflow-x: hidden;
      position: relative;
      margin: 0 auto;
      
      @media ${Device.MaxWidthFull} {
        padding: ${SizeMiddleRem} 0;
      }
      @media ${Device.MaxHeightM} {
        padding: ${SizeRegularRem} 0;
      }
    }
  }
  ::-webkit-scrollbar,
  ::-webkit-scrollbar-thumb ,
  ::-webkit-scrollbar-track {
    opacity: 0;
    width: 0;
    height: 0;
    background-color: ${Transparent};
  }
  input:focus, select:focus, textarea:focus {
    outline: 0;
  }
  label {
    display: block;
  }
  textarea {
    resize: none;
  }
  button {
    border: 0;
    background-color: ${Transparent};
    padding: 0;
    cursor: pointer;
    -webkit-appearance: none;
  }
  button:disabled {
    cursor: not-allowed;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    cursor: pointer;
  }
  i {
    font-style: normal;
  }
  ul {
    list-style: none;
  }
  fieldset {
    border: 0;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section,
  table, tbody, td {
    display: block;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  input::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`;

export default GlobalStyle;

import {css} from 'styled-components';
// import { device } from "../../../../../styles/deviceSizes";

// const gapstackPurple = '#7c60ff';

const style = () => css`
  height: 100%;
  overflow: hidden;
  .progress-bar {
    width: 100%;
    position: absolute;
    top: -9px;
    left: 0;
  }
  .direction-button-container {
    position: absolute;
    bottom: 40px;
    right: 40px;
    z-index: 10;
  }
`;

export { style };

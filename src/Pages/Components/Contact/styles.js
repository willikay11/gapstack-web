import { css } from 'styled-components';
import { device } from '../../../styles/deviceSizes';

// const gapstackPurple = '#39426A';

const style = ({ backgroundImage }) => css`
  .container {
    height: 400px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  
  .background-container {
    background-image: url(${backgroundImage});
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    // background-position: right;
  }
  
  .linear-gradient-background {
    background: linear-gradient(90deg, rgba(124, 96, 255, 0.9) 31.02%, rgba(0, 0, 0, 0.25) 99.17%);
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  
  .title {
    color: #fff;
    font-size: 34px;
    lineHeight: 135.2%;
    z-index: 10;
  }
  
    ${device.largeScreen || device.desktopOrLaptop || device.tabletLandscape || device.tabletPortrait} {
    .title {
        font-size: 44px;
    }
  }
  
  .description {
    font-size: 16px;
    line-height: 30px;
    color: #fff;
  }
`;

export { style };

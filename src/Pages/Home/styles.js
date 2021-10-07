import { css } from 'styled-components';
import { device } from '../../styles/deviceSizes';

// const gapstackPurple = '#39426A';

const style = ({backgroundImage}) => css`
  height: 100%;
  .home-container {
    display: flex;
    height: 100%;
    flex-flow: column nowrap;
  }
  
  .background-container {
    background-image: url(${backgroundImage});
    height: 600px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-position: right;
    position: relative;
    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: linear-gradient(265.8deg, rgba(57, 66, 106, 0.8) 8.24%, rgba(124, 96, 255, 0.8) 92.69%);
      mix-blend-mode: normal;
      backdrop-filter: blur(8px)
    }
    .container {
      flex: 1;
      flex-direction: column;
      display: flex;
      align-items: center;
      z-index: 100;
      .title {
        font-weight: bold;
        font-size: 38px;
        line-height: 44px;
        text-align: center;
        color: #FFFFFF;
      }
      ${device.largeScreen || device.desktopOrLaptop || device.tabletLandscape || device.tabletPortrait} {
        .title {
         font-size: 46px;
         line-height: 63px;
        }
      }
      .description {
        font-weight: normal;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        color: #FFFFFF;
        width: 100%;
      }
      ${device.largeScreen || device.desktopOrLaptop || device.tabletLandscape || device.tabletPortrait} {
       .description {
         font-size: 24px;
         line-height: 33px;
         width: 50%;
       }
      }
    }
  }
  
 `;

export { style };

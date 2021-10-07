import { css } from 'styled-components';
import { device } from '../../../styles/deviceSizes';

const gapstackPurple = '#39426A';

const style = ({backgroundImage, size}) => css`
  .container {
    min-height: 500px;
    padding-top: 100px;
    padding-bottom: 100px;
  }
    
  .margin {
    margin-top: 100px;
  }
  
    ${device.largeScreen || device.desktopOrLaptop || device.tabletLandscape || device.tabletPortrait} {
      .margin {
        margin-top: 200px;
      }
  }
  
  .sub-title {
    color: #E74C3C;
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
  }
  
  .title {
    color: ${gapstackPurple};
    font-size: 38px;
    font-weight: 800;
    line-height: 135.2%;
    margin-bottom: 0px;
  }
  
  ${device.largeScreen || device.desktopOrLaptop || device.tabletLandscape || device.tabletPortrait} {
    .title {
        font-size: 50px;
    }
  }
  
  .description {
    color: ${gapstackPurple};
    font-size: 16px;
    line-height: 30px;
  }
  
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 10px;
  }

  ${device.largeScreen || device.desktopOrLaptop || device.tabletLandscape || device.tabletPortrait} {
    .button-container {
      margin-top: 0px;
      align-items: flex-end;
      justify-content: flex-end;
    }
  }
  
  .background-container {
    background-image: url(${backgroundImage});
    height: ${size}px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-position: right;
    position: relative;
  }
  
  .background-content {
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-start;
    background-position: center;
    align-items: flex-end;
    border-radius: 5px;
    .text-container {
      flex: 1;
      flex-direction: column;
      display: flex;
      align-items: flex-start;
      z-index: 100;
      padding: 20px;
      .title {
        font-weight: bold;
        font-size: 20px;
        line-height: 31px;
        color: #FFFFFF;
        margin-bottom: 10px;
      }
      .description {
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
      }
    }
  }
  
  .large-image {
    height: 450px;
    margin-bottom: 20px;
  }

  ${device.largeScreen || device.desktopOrLaptop || device.tabletLandscape || device.tabletPortrait} {
    .large-image {
      height: 620px;
      margin-bottom: 0px;
    }
  }
  
  .small-image {
    height: 300px;
  }
`;

export { style };

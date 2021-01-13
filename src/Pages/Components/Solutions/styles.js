import { css } from 'styled-components';
import { device } from '../../../styles/deviceSizes';

const gapstackPurple = '#39426A';

const style = () => css`
  .container {
    min-height: 500px;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  
  .owl-carousel-container {
    margin-top: 10px;
    margin-bottom: 10px;
    .description-container {
        flex: 1;
        flex-direction: column;
        display: flex;
        justify-content: center;
        height: 100%;
        margin-top: 20px;
    }
    
    .image {
      height: 200px;
    }
    
    ${device.largeScreen || device.desktopOrLaptop || device.tabletLandscape || device.tabletPortrait} {
        .image {
          height: 250px;
        }
    }
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
    font-size: 30px;
    font-weight: 800;
    line-height: 135.2%
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
  
  .item {
    //background-color: #fff;
    //border-radius: 5px;
    //box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    //padding: 20px;

    .title {
      font-size: 18px;
      color: ${gapstackPurple};
      font-weight: 800
    }
    
      ${device.largeScreen || device.desktopOrLaptop || device.tabletLandscape || device.tabletPortrait} {
        .title {
            font-size: 20px;
        }
      }
      
    .description {
      font-size: 16px;
      color: ${gapstackPurple};
      line-height: 30px;
    }
  }
`;

export { style };

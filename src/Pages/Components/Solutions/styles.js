import { css } from 'styled-components';
import { device } from '../../../styles/deviceSizes';

const gapstackPurple = '#39426A';

const style = () => css`
  .container {
    min-height: 500px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  
  .owl-carousel-container {
    margin-top: 10px;
    margin-bottom: 10px;
  }
    
  .sub-title {
    color: #E74C3C;
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
  }
  
  .title {
    color: ${gapstackPurple};
    font-size: 34px;
    font-weight: 800;
    line-height: 135.2%
  }
  
  ${device.largeScreen || device.desktopOrLaptop || device.tabletLandscape || device.tabletPortrait} {
    .title {
        font-size: 44px;
    }
  }
  
  .description {
    color: ${gapstackPurple};
    font-size: 16px;
    line-height: 30px;
  }
  
  .item {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;

    .title {
      font-size: 30px;
      color: ${gapstackPurple};
      font-weight: 800
    }
    
      ${device.largeScreen || device.desktopOrLaptop || device.tabletLandscape || device.tabletPortrait} {
        .title {
            font-size: 34px;
        }
      }
      
    .description {
      font-size: 16px;
      color: ${gapstackPurple};
      line-height: 30px;
    }
    
    .image {
      height: 350px;
    }
  }
`;

export { style };
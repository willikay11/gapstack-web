import { css } from 'styled-components';
import { device } from '../../../styles/deviceSizes';

const gapstackPurple = '#39426A';

const style = () => css`
  .container {
    min-height: 400px;
    margin-top: 50px;
    background-color: #f3f4f8;
  }
  
  .image-container {
    margin-top: 100px;
    margin-bottom: 100px;
  }
  
  .title-container {
    margin-top: 50px;
  }
  
  .description-container {
    margin-bottom: 30px;
    .description {
      color: ${gapstackPurple};
      font-size: 16px;
      font-weight: normal;
      line-height: 30px;
    }
  }
  
  .title {
    font-size: 34px;
    color: ${gapstackPurple};
    line-height: 135.2%;
    font-weight: bold;
    font-style: normal;
  }
  
   ${device.largeScreen || device.desktopOrLaptop || device.tabletLandscape || device.tabletPortrait} {
    .title {
        font-size: 44px;
    }
  }
  
  .item {
    .icon {
      margin-bottom: 15px;
    }
    
    .title {
      color: ${gapstackPurple};
      font-size: 20px;
      font-weight: 600;
      font-style: normal
    }
    
    .description {
      color: ${gapstackPurple};
      font-size: 16px;
      font-weight: normal;
      line-height: 30px;
    }
  }
`;

export { style };
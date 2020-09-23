import { css } from 'styled-components';
import { device } from '../../../styles/deviceSizes';

const gapstackPurple = '#39426A';

const style = () => css`
  .container {
    margin-top: 50px;
  }
  
  .title {
    font-size: 34px;
    color: ${gapstackPurple};
    line-height: 135.2%;
    font-weight: 800
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
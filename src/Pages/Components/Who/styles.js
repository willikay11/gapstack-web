import { css } from 'styled-components';
import { device } from '../../../styles/deviceSizes';

const gapstackPurple = '#39426A';

const style = () => css`
  background-color: #f3f4f8; 
  .container {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  
  .title {
    font-size: 34px;
    color: ${gapstackPurple};
    line-height: 135.2%;
    font-weight: 800
  }
  
  .left-content {
    padding-right: 0px;
  }
  
  ${device.largeScreen || device.desktopOrLaptop || device.tabletLandscape || device.tabletPortrait} {
    .title {
        font-size: 44px;
    }
    
    .left-content {
      padding-right: 40px;
    }
  }
  .sub-title {
    color: ${gapstackPurple};
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
  }
  
  .description {
    color: ${gapstackPurple};
    font-size: 16px;
    line-height: 30px;
  }
  
  .owl-container {
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    min-height: 470px;
    // width: 400px;
    padding: 40px;
    .icon {
      margin-bottom: 30px;
    }
    .title {
      font-weight: 600;
      font-size: 34px;
      line-height: 135.2%;      
      color: ${gapstackPurple};
    }
    .description {
      font-size: 16px;
      line-height: 165.8%;      
      color: ${gapstackPurple};
    }
  }
`

export { style };
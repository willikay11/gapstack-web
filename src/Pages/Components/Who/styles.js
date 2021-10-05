import { css } from 'styled-components';
import { device } from '../../../styles/deviceSizes';

const gapstackDarkBlue = '#39426A';
const gapstackPurple = '#7C60FF';

const style = () => css`
  .container {
    padding: 100px 0px;
  }
  
  .title-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
  }
  
  .sub-sub-title {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: ${gapstackPurple};
    margin-bottom: 0px;
  }

  .title {
    font-size: 34px;
    color: ${gapstackDarkBlue};
    line-height: 135.2%;
    font-weight: 800;
    margin-bottom: 20px;
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
    color: ${gapstackDarkBlue};
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
    text-align: center;
  }

  ${device.largeScreen || device.desktopOrLaptop || device.tabletLandscape || device.tabletPortrait} {
    .sub-title {
      width: 40%;
    }

    .left-content {
      width: 100%;
    }
  }
  
  .description {
    color: ${gapstackDarkBlue};
    font-size: 16px;
    line-height: 30px;
  }
  
  .owl-container {
    background: #FFFFFF;
    border-radius: 5px;
    min-height: 300px;
    // width: 400px;
    padding: 40px 40px 40px 0px;
    &:hover {
      //box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.1);
      //border-radius: 5px;
    }
    .icon {
      margin-bottom: 30px;
    }
    .title {
      font-weight: 600;
      font-size: 34px;
      line-height: 135.2%;      
      color: ${gapstackDarkBlue};
    }
    .description {
      font-size: 16px;
      line-height: 165.8%;      
      color: ${gapstackDarkBlue};
    }
  }
`

export { style };

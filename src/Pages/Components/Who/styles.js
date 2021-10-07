import { css } from 'styled-components';
import { device } from '../../../styles/deviceSizes';

const gapstackDarkBlue = '#39426A';
const gapstackPurple = '#7C60FF';

const style = () => css`
  background: #fbfaff;

  .container {
    padding: 100px 0px;
  }
  
  .title-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
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
      text-align: center;
    }
    .sub-title {
      color: ${gapstackDarkBlue};
      font-size: 16px;
      font-weight: 500;
      line-height: 25px;
      text-align: center;
    }
    ${device.largeScreen || device.desktopOrLaptop || device.tabletLandscape || device.tabletPortrait} {
      .title {
        font-size: 46px;
      }
    }

    ${device.largeScreen || device.desktopOrLaptop || device.tabletLandscape || device.tabletPortrait} {
      .sub-title {
        width: 40%;
      }
    }
  }
`

export { style };

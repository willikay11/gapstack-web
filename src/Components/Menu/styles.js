import { css } from 'styled-components';
import { device } from '../../styles/deviceSizes';
//
// const gapstackPurple = '#39426A';

const style = () => css`
  .container {
    height: 130px;
    align-items: center;
    padding: 20px 0px;
    position: relative;
    z-index: 10;
  }
  
  .logo {
    height: 20px
  }
  
  ${device.largeScreen} {
    .logo {
        height: 25px;
    }
  }
  
  ${device.tabletPortrait} {
    .logo {
      height: 25px;
    }
  }
  
 ${device.tabletLandscape} {
    .logo {
      height: 25px;
    }
  }
 `;

export { style };
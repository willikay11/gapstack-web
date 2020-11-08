import { css } from 'styled-components';
import { device } from '../../styles/deviceSizes';

// const gapstackPurple = '#39426A';

const style = () => css`
  .menu-container {
    height: 130px;
    align-items: center;
    padding: 20px 0px;
    position: relative;
    z-index: 10;
  }
  
  .logo {
    height: 20px
  }
  
  .action-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  
  ${device.largeScreen} {
    .logo {
        height: 60px;
    }
  }
  
  ${device.tabletPortrait} {
    .logo {
      height: 60px;
    }
  }
  
 ${device.tabletLandscape} {
    .logo {
      height: 60px;
    }
  }
 `;

export { style };
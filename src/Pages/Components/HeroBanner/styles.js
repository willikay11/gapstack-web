import { css } from 'styled-components';
import { device } from '../../../styles/deviceSizes';

const gapstackPurple = '#39426A';

const style = () => css`
  background-color: #f3f4f8;  
  .container {
    position: relative;
     height: 100vh; 
  }
  
  .fade-container {
    position: relative;
    z-index: 10;
    // flex-grow: 1;
    height: calc(100% - 130px);
  }
  
  .banner-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    
    .title {
        font-size: 34px;
        color: ${gapstackPurple};
        text-transform: capitalize;
        line-height: 135.2%;
        font-weight: bold;
        font-style: normal
    }
    
    ${device.desktopOrLaptop} {
        .title {
            font-size: 44px;
        }
    }
    
    ${device.largeScreen} {
        .title {
            font-size: 44px;
        }
    }
    
    ${device.tabletLandscape || device.tabletPortrait} {
        .title {
            font-size: 44px;
        }
    }
    
    .description {
        font-size: 16px;
        color: ${gapstackPurple};
        line-height: 30px;
        font-weight: 500;
        font-style: normal;
    }
  }
`;

export { style }
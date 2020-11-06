import { css } from 'styled-components';
import { device } from '../../../styles/deviceSizes';

const gapstackPurple = '#39426A';

const style = () => css`
  // background-color: #f3f4f8;  
  .container {
    position: relative;
    min-height: 100vh; 
  }
  
  .fade-container {
    position: relative;
    z-index: 10;
    // flex-grow: 1;
    height: calc(100% - 130px);
  }
  
  .banner-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 70px;
    margin-top: 100px;
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
            font-size: 50px;
        }
    }
    
    ${device.largeScreen} {
        .title {
            font-size: 50px;
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
  
  .image {
    height: 310px;
  }
  
  .mobile-image {
    display: none;
  }
  
  .circular {
    display: none
  }
  
  ${device.desktopOrLaptop} {
    .image {
        height: 450px;
     }
     
    .mobile-image {
      position: absolute;
      width: 25%;
      top: 250px;
      right: -120px;
    }
    
    .circular {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        zIndex: 0;
    }
  }
  
  ${device.largeScreen} {
    .image {
        height: 450px;
    }
    
    .mobile-image {
      position: absolute;
      width: 25%;
      top: 250px;
      right: -120px;
    }
    
    .circular {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        zIndex: 0;
    }
  }
  
  .circle {
      border-radius: 50%;
      background-color: #ffffff;
      border: 2px solid #C4C4C4;
      width: 650px;
      height: 650px;
      position: absolute;
      opacity: 0;
      animation: scaleIn 15s infinite cubic-bezier(.36, .11, .89, .32);
  }
  
  .first {
    animation-delay: -8s
  }
  .second {
    animation-delay: -2s
  }
  .third {
     animation-delay: 4s
  }
      
  @keyframes scaleIn {
      from {
        transform: scale(.5, .5);
        opacity: .5;
      }
      to {
        transform: scale(2.5, 2.5);
        opacity: 0;
      }
    }
`;

export { style }
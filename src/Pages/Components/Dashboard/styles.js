import { css } from 'styled-components';
import { device } from '../../../styles/deviceSizes';

const gapstackPurple = '#39426A';

const style = ({ backgroundImage }) => css`
  .container {
    min-height: 400px;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
     .container-two {
        background: linear-gradient(113.53deg, #F3F4F8 41.45%, rgba(248, 249, 251, 0.658783) 83.36%, rgba(255, 255, 255, 0.2) 118.9%);
        padding: 100px 0px;
     }
  }
  
  .image-container {
    margin-top: 100px;
    margin-bottom: 100px;
  }
  
  .title-container {
    // margin-top: 50px;
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
      margin-bottom: 0px;
    }

     .bullet {
        content: "";
        border: 1.33333px solid #777C93;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        margin-right: 10px;
     }
  }
`;

export { style };

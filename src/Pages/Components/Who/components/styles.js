import { css } from 'styled-components';
import { device } from '../../../../styles/deviceSizes';

const gapstackDarkBlue = '#39426A';

const style = ({borderColor}) => css`
  .item-container {
    margin-top: 60px;
    background: linear-gradient(to right, ${borderColor}, rgba(255, 255, 255, 0.26) 102.67%);
    border-radius: 5px;
    padding: 1px;
    .inner-container {
      border-radius: 5px;
      background: #ffffff;
      padding: 40px 20px 20px 20px;
      position: relative;
      .icon {
          width: 10%;
          position: absolute;
          top: -30px;
      }
      .title {
        font-weight: bold;
        font-size: 20px;
        line-height: 37px;
        color: ${gapstackDarkBlue};
        ${device.largeScreen || device.desktopOrLaptop || device.tabletLandscape || device.tabletPortrait} {
          .title {
            font-size: 24px;
          }
        }
      }

      .description {
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        color: ${gapstackDarkBlue};
        margin-bottom: 0px;
      }
    }
  }
`;

export default style;

import { css } from 'styled-components';
// import { device } from '../../styles/deviceSizes';
//
// const gapstackPurple = '#39426A';

const style = ({backgroundImage}) => css`
  height: 100%;
  .home-container {
    display: flex;
    height: 100%;
    flex-flow: column nowrap;
  }
  
  .background-container {
    background-image: url(${backgroundImage});
    height: 600px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-position: right;
  }
  
 `;

export { style };
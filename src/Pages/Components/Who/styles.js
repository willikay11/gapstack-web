import { css } from 'styled-components';
// import { device } from '../../../styles/deviceSizes';

const gapstackPurple = '#39426A';

const style = () => css`
  .container {
    min-height: 500px;
    margin-top: 50px;
  }
  
  .title {
    font-size: 50px;
    color: ${gapstackPurple};
    line-height: 135.2%;
    font-weight: 800
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
`

export { style };
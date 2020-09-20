import { css } from 'styled-components';
// import { device } from '../../../styles/deviceSizes';

const gapstackPurple = '#39426A';

const style = () => css`
  .container {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  
  .item {
    .title {
        color: ${gapstackPurple};
        margin-bottom: 10px;
        font-weight: 600;
        font-size: 18px;
    }
    
    .email-link {
        margin-bottom: 10px;
        color: #40a9ff;
    }
  }
`;

export {style }
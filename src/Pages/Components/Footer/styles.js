import { css } from 'styled-components';

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
  
  .text {
    color: ${gapstackPurple}
  }
  
  .tag {
    margin-top: 10px;
    color: ${gapstackPurple};
    font-weight: 500;
    font-size: 14px;
  }
  
  .footer-bottom {
    height: 100px;
    margin-top: 25px;
    border-top: 1px solid #F3F4F8;
  }
`;

export {style }
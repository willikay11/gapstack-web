import { css } from 'styled-components';

// const gapstackPurple = '#39426A';

const style = ({ backgroundImage }) => css`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .container {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  
  .item {
    .title {
        color: #ffffff;
        margin-bottom: 10px;
        font-weight: 600;
        font-size: 18px;
    }
    
    .email-link {
        margin-bottom: 10px;
        color: #ffffff;
    }
  }
  
  .text {
    color: #ffffff;
  }
  
  .tag {
    margin-top: 10px;
    color: #ffffff;
    font-weight: 500;
    font-size: 14px;
  }
  
  .footer-bottom {
    height: 100px;
    margin-top: 25px;
    border-top: 1px solid #F3F4F8;
  }
  .footer-footer {
    border-top: 1px solid #ffffff;
    display: flex;
    flex-direction: row;
    padding-top: 15px;
    justify-content: space-between;
    .first-container {
      display: flex;
      align-items: center;
      .text {
        margin-left: 10px;
        color: #ffffff;
      }
    }
    .second-container {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 10px;
    }
  }
`;

export {style }

import {css} from 'styled-components';
// import { device } from "../../../../../styles/deviceSizes";

// const gapstackPurple = '#7c60ff';

const style = () => css`
  height: 100%;
  overflow: hidden;
  .pagination-container {
    position: absolute;
    bottom: 40px;
    left: 40px;
    z-index: 10;
    .current-item {
      font-weight: 900;
      font-size: 34px;
      line-height: 53px;
      color: #39426A;
    }
    .total-item {
      color: #6c7392;
    }
  }
  .direction-button-container {
    display: flex;
    position: absolute;
    bottom: 40px;
    right: 40px;
    z-index: 10;
  }
  .title {
    font-style: normal;
    font-weight: 900;
    font-size: 34px;
    line-height: 53px;
    color: #39426A;
    margin-bottom: 10px;
  }
  .description {
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #39426A;
    margin-bottom: 20px;
  }
  .item-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  label {
    font-size: 16px;
    line-height: 22px;
    color: #39426A;
  }
`;

export { style };

import { css } from 'styled-components';

// const gapstackPurple = '#39426A';

const styles = ({type}) => css`
  .purple {
    color: #fff;
    background-color: ${type === 'purple' ? '#7c60ff' : type === 'orange' ? '#FE9902' : ''};
    height: 50px;
    border-radius: 4px;
    border-color: ${type === 'purple' ? '#7c60ff' : type === 'orange' ? '#FE9902' : ''};
    min-width: 140px;
  }
`;

export default styles;

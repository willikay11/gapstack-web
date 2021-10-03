import React from "react";
import styled from "styled-components";
import styles from "./styles";
import {Button} from "antd";

const ButtonWrapper = styled.div`
  ${styles}
`;

export const PurpleButton = ({buttonName}) => {
    return (
        <ButtonWrapper>
            <Button className="purple">{buttonName}</Button>
        </ButtonWrapper>
    );
}

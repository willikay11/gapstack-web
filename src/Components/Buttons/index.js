import React from "react";
import styled from "styled-components";
import styles from "./styles";
import {Button} from "antd";

const ButtonWrapper = styled.div`
  ${styles}
`;

export const GapstackButton = ({buttonName, type, onClick}) => {
    return (
        <ButtonWrapper type={type}>
            <Button onClick={onClick} className="purple">{buttonName}</Button>
        </ButtonWrapper>
    );
}


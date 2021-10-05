import React from "react";
import styled from "styled-components";
import styles from "./styles";
import {Button} from "antd";

const ButtonWrapper = styled.div`
  ${styles}
`;

export const GapstackButton = ({buttonName, type}) => {
    return (
        <ButtonWrapper type={type}>
            <Button className="purple">{buttonName}</Button>
        </ButtonWrapper>
    );
}


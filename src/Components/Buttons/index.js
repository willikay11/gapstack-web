import React from "react";
import styled from "styled-components";
import styles from "./styles";
import {Button} from "antd";

const ButtonWrapper = styled.div`
  ${styles}
`;

export const GapstackButton = ({buttonName, type, onClick, icon, style, htmlType = 'button', loading = false}) => {
    return (
        <ButtonWrapper type={type}>
            <Button onClick={onClick} htmlType={htmlType} style={{ ...style }} icon={icon} loading={loading} className="purple">{buttonName}</Button>
        </ButtonWrapper>
    );
}


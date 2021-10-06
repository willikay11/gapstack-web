import React from "react";
import styled from "styled-components";
import style from "./styles";

const ItemWrapper = styled.div`
  ${style}
`;

const Item = ({title, description, icon, borderColor}) => {
    return (
        <ItemWrapper borderColor={borderColor}>
            <div className="item-container">
                <div className="inner-container">
                    <img className="icon" alt="item-icon" src={icon} />
                    <p className="title">{title}</p>
                    <p className="description">{description}</p>
                </div>
            </div>
        </ItemWrapper>
    );
}

export default Item;

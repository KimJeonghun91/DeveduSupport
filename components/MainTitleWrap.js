import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "../constants/Layout";
import { BG_COLOR,TINT_COLOR, GREY_COLOR } from "../constants/Colors";

const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-left: ${Layout.marginTitle};
    padding-right:${Layout.marginTitle}; 
    margin-top: ${Layout.marginTitleTop};
    margin-bottom: ${Layout.marginTitleBottom};
`;

const ConRow = styled.View`
`;

const TextTitle = styled.Text`
  font-size: ${Layout.fsXL};
  font-weight: 600;
  color: "#000000";
`;

const TextSub = styled.Text`
font-size: ${Layout.fsXS};
  color: ${GREY_COLOR};
  align-self: center;
`; 


const MainTitleWrap = ({ title, sub }) => (
  <Container>
    <ConRow>
        <TextTitle>{title}</TextTitle>
        <TextSub>{sub}</TextSub>
    </ConRow>
    <TextSub>자세히 보기</TextSub>
  </Container> 
);

MainTitleWrap.propTypes = {
  title: PropTypes.string,
  sub: PropTypes.string
};

export default MainTitleWrap;
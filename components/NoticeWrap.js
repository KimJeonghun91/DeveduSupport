import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "../constants/Layout";
import { BG_COLOR, MAIN_COLOR, GREY_COLOR } from "../constants/Colors";

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: ${Layout.marginSub};
    margin-right:${Layout.marginSub};
    margin-bottom: 10px; 
    border: 1px solid;
    border-color: ${MAIN_COLOR};
    border-radius: 5px;
    padding: 5px 15px 6px 15px;

`;

const View = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

const View2 = styled.View`
    flex: 1;
`;

const TextDay = styled.Text`
  font-size: ${Layout.fsXL};
  font-weight: 600;
  color: ${MAIN_COLOR};
`;

const TextLine = styled.Text`
  font-size: ${Layout.fsM};
  font-weight: 600;
  margin-left: 8px;
  margin-right: 8px;
  color: ${MAIN_COLOR};
`;

const TextAccount = styled.Text`
  font-size: ${Layout.fsS};
  color: ${MAIN_COLOR}; 
`;

const TextRegDate = styled.Text`
  font-size: ${Layout.fsXS};
  color: ${MAIN_COLOR};
  align-self: flex-end;
`;

const NoticeWrap = ({ day, account, regDate }) => (
  <Container>
    <View>
      <TextDay>{day}</TextDay>
      <TextLine>|</TextLine>
      <TextAccount>{account}</TextAccount>
    </View>
    <View2>
      <TextRegDate>({regDate})</TextRegDate>
    </View2>
  </Container >
);

NoticeWrap.propTypes = {
  day: PropTypes.string,
  account: PropTypes.string,
  regDate: PropTypes.string
};

export default NoticeWrap;
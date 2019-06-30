import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "../constants/Layout";
import { BG_COLOR,SUB_COLOR, GREY_COLOR, MAIN_COLOR } from "../constants/Colors";
import * as Progress from 'react-native-progress';


const Container = styled.View`
  border-radius: 10px;
  height: 200px;
  margin-left: ${Layout.marginSub};
  margin-right: ${Layout.marginSub};
  background-color: white;
  box-shadow: 10px 5px 5px gray;
  elevation:4;
`;

const ConRow = styled.View`
  height: 100%;
  flex-direction: row;
`;

const BgLeft = styled.View`
  width: 60px;
  height: 100%;
  flex-direction:column;
  background-color: ${MAIN_COLOR};
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const BgRight = styled.View`
  flex: 1;
  height: 100%;
  flex-direction:row;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const ViewLine = styled.View`
  height: 30px;
  width: 1px;
  background-color: #dedede;
`;

const ViewProgress = styled.View`
  height: 100%;
  flex:1;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`;

const ViewAttend = styled.View`
  height: 100%;
  flex:1;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const ImageProfile = styled.Image`
    width: 32px;
    height: 32px;
    border-radius: 500px;
    margin-bottom: 5px;
`;

const TextName = styled.Text`
    font-size: ${Layout.fsL};
    color: white;
    font-weight: 600;
`;

const TextTitle = styled.Text`
    font-size: ${Layout.fsM};
    color: ${GREY_COLOR};
    margin-bottom: 15px;
`;

const TextSub = styled.Text`
    font-size: ${Layout.fsS};
    color: ${SUB_COLOR};
    margin-top: 10px;
`;

const TextCnt = styled.Text`
    font-size: ${Layout.fs9XL};
    color: ${SUB_COLOR};
    font-weight: 600;
`;

const ViewCnt = styled.View`
    height:85px;
    flex-direction:row;
    justify-content: center;
    align-items: center;
`;

const InfoCard = ({ name,pic,progress,attend,indeterminate }) => (
  <Container>
    <ConRow>
      <BgLeft>
        <ImageProfile source={require('../img/tempProfile.png')} />
        <TextName>김</TextName>
        <TextName>정</TextName>
        <TextName>훈</TextName>
      </BgLeft>

      <BgRight>
        <ViewProgress>
          <TextTitle>수업진도</TextTitle>
          <Progress.Circle
            size={85}
            progress={progress}
            indeterminate={indeterminate}
            showsText='true'
          />
          <TextSub>CreativeBeginner</TextSub>
        </ViewProgress>
      
        <ViewLine />

        <ViewAttend>
          <TextTitle>수업출석</TextTitle>
          <ViewCnt>
            <TextCnt>8회</TextCnt>
          </ViewCnt>
          <TextSub>최근: 2019-06-01</TextSub>
        </ViewAttend>
      </BgRight>
    </ConRow>
  </Container> 
);

InfoCard.propTypes = {
  name: PropTypes.string,
  pic: PropTypes.string,
  progress: PropTypes.string,
  attend: PropTypes.string,
  indeterminate: PropTypes.bool
};

export default InfoCard;
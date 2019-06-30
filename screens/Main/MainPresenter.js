import React from "react";
import { FlatList } from 'react-native';
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import { GREY_COLOR } from "../../constants/Colors";
import RootScrollView from "../../components/RootScrollView";
import MainSlider from "../../components/MainSlider";
import Layout from"../../constants/Layout";
import MainTitleWrap from "../../components/MainTitleWrap";
import NoticeWrap from "../../components/NoticeWrap";
import GubunLine from "../../components/GubunLine";
import InfoCard from "../../components/InfoCard";



const ContainerTop = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-left: ${Layout.marginTitle};
    padding-right:${Layout.marginTitle}; 
    margin-top: 60px;
    margin-bottom: 30px; 
`;


const ViewImageWrap = styled.View`
    flex: 1;
    position: relative;
    height: 100px;
    margin-left: ${Layout.marginSub};
    margin-right:${Layout.marginSub}; 
    border-radius: 5px;
`;

const ImageBg = styled.Image`
    width: 100%;
    height: 100px;
    position: absolute;
    border-radius: 5px;
`;

const ViewIntext = styled.View`
    flex: 1;
    flex-direction: row;
    padding-horizontal: 18px;
    padding-top:13px;
    justify-content: space-between;
`;

const ImageTopLogo = styled.Image`
    width: 100px;
    height: 21px;
`;

const TextSubGray = styled.Text`
    font-size: ${Layout.fsS};
    color: ${GREY_COLOR};
`;

const TextMypage = styled.Text`
    font-size: ${Layout.fsXXXL};
    color: white;
    font-weight: 600;
`;

const TextMypageS = styled.Text`
    font-size: ${Layout.fsM};
    color: white;
    margin-top: 50px;
`;

const ViewMargin = styled.View`
    width:100%;
    height: 10px;
`;

const ViewGalleryImgWrap = styled.View`
    /* justify-content: center;
    flex: 1; */
    justify-content: center;
    flex: 1;
    margin-left: ${Layout.marginSub};
    margin-right:${Layout.marginSub}; 
`;

const ImageGallery = styled.Image`
    /* justify-content: center;
    align-items: center; */
    width: ${(Layout.width / 3)-3};
    height: ${(Layout.width / 3)-3};
    align-items: center;
    justify-content: center;
`;

const ViewInGallery = styled.View`
    /* flex-direction: column;
    flex: 1; */
    /* margin: 1; */
    flex-direction: column;
    flex: 1;
    margin-bottom: 5px;
`;

const FlatListCustom = styled.FlatList`
    background-color: #ff00ff;
`;


const MainsPresenter = ({ loading,testArray,progress,indeterminate,dataSource }) => 
    loading ? (
        <Loader />
    ) : (
            <RootScrollView>
                <ContainerTop>
                    <ImageTopLogo source={require('../../img/logo_devedu_flat.png')} />
                    <TextSubGray>데브에듀 교육 지원 시스템</TextSubGray>
                </ContainerTop>

                <MainSlider BannerDatas={testArray}/>

                <MainTitleWrap title='NOTICE' sub='데브에듀의 중요 행사를 알려드립니다!'/>

                <NoticeWrap day='D-01' account='회비 납부일' regDate='2019-06-01' />
                <NoticeWrap day='D-20' account='학부모 설명회' regDate='2019-06-01' />
                <NoticeWrap day='D-31' account='데브에듀 코딩 페스타' regDate='2019-06-01' />
                <NoticeWrap day='D-40' account='데브에듀 코딩 페스타' regDate='2019-06-01' />

                <GubunLine />

                <MainTitleWrap title='EDU INFO' sub='학생의 교육 현황을 한눈에 알려드립니다.'/>

                <InfoCard name='' pic='' progress={progress} attend='' indeterminate={indeterminate} />
                
                <GubunLine />

                <MainTitleWrap title='MY PAGE' sub='개인별 맞춤 공지 사항입니다.'/>

                <ViewImageWrap >
                    <ImageBg source={require('../../img/bg_consult.png')}/>
                    <ViewIntext >
                        <TextMypage>상담 내역</TextMypage>
                        <TextMypageS>자세히 보기</TextMypageS>
                    </ViewIntext>
                </ViewImageWrap>
                
                <ViewMargin />

                <ViewImageWrap >
                    <ImageBg source={require('../../img/bg_point.png')}/>
                    <ViewIntext >
                        <TextMypage>포인트 관리</TextMypage>
                        <TextMypageS>자세히 보기</TextMypageS>
                    </ViewIntext>
                </ViewImageWrap>

                <MainTitleWrap title='GALLERY' sub='데브에듀 학원의 수업과 행사 모습 입니다.'/>

                <ViewGalleryImgWrap>
                    <FlatListCustom
                        data={dataSource}
                        renderItem={({ item }) => (
                            <ViewInGallery>
                                <ImageGallery source={require('../../img/temp_gallery.png')} />
                            </ViewInGallery>
                        )}
                        //Setting the number of column
                        numColumns={3}
                        keyExtractor={(item, index) => index}
                    />
                </ViewGalleryImgWrap>
            </RootScrollView>
        );

// 부모뷰에게 전달받는 Prop
MainsPresenter.propTypes = { 
    loading: PropTypes.bool.isRequired,
    testArray: PropTypes.array,
    progress: PropTypes.number,
    indeterminate: PropTypes.bool,
    dataSource: PropTypes.array
};

export default MainsPresenter;
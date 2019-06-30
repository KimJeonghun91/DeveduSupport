import React from 'react';
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import MainNavigation from "./navigation/MainNavigation";
import { StatusBar } from "react-native"

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = error => console.log(error); // 에러 핸들러

  handleLoaded = () => this.setState({ loaded: true }); // 로딩 끝난 뒤

  // 성공시 handleLoaded 호출
  // 실패시 handleError 호출
  loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font
    });
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
          <>
          <StatusBar barStyle="light-content"/>
          <MainNavigation />
          </>
      );
    } else {
      return (
        <AppLoading
          startAsync={this.loadAssets}
          onFinish={this.handleLoaded}
          onError={this.handleError}
        />
      );
    }
  }
}


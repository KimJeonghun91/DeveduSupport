import { createStackNavigator, createAppContainer } from "react-navigation";
import MainScreen from "../screens/Main";

const MainNavigation = createStackNavigator(
  {
    Detail: {
      screen: MainScreen
    }
  },
  {
    headerMode: "none",
    headerBackTitleVisible: false
  }
);

export default createAppContainer(MainNavigation); 
"use strict";

/**
 * Npm imports
 */
import { createStackNavigator } from "react-navigation";

/**
 * Local imports
 */
import Scene from "../Scene/";

console.log("Scene : ", Scene);
const AppNavigator = createStackNavigator(
  {
    // ------------------------------------------------
    // - Start scene
    [Scene.Home.key]: {
      screen: Scene.Home.component
    },
    [Scene.Details.key]: {
      screen: Scene.Details.component
    }
  },
  {
    initialRouteName: Scene.Home.key,
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default AppNavigator;

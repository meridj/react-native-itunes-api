"use strict";

/**
 * Npm imports
 */
import React from "react";
import { View, StyleSheet } from "react-native";

/**
 * Local imports
 */
import AppNavigator from "./UI/Navigator/AppNavigator";
import HttpClient from "./Layer/Network/HTTPClient";
import NetworkUrls from "./Layer/Network/NetworkUrls";
class App extends React.Component {
  render() {
    /*
    HttpClient.get(
      `/${NetworkUrls.action}${NetworkUrls.nekfeuSongs}&${
        NetworkUrls.resultLimit
      }`
    ).then(res => console.log(res.data.results));*/
    return (
      <View style={styles.rootView}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1
  }
});

export default App;

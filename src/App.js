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

class App extends React.Component {
  render() {
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

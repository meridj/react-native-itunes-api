"use strict";

/**
 * Npm imports
 */
import React from "react";
import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";

/**
 * Local imports
 */
import AppNavigator from "./UI/Navigator/AppNavigator";
import store from "./Business/Store";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.rootView}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1
  }
});

export default App;

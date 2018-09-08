"use strict";

/**
 * Npm imports
 */
import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  cardView: {
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 30,
    margin: 30
  },
  labelView: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  artistName: {
    fontSize: 20
  }
});

export default Style;

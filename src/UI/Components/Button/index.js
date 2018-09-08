"use strict";

/**
 * Npm imports
 */
import React from "react";
import { TouchableOpacity, Text } from "react-native";

/**
 * Local imports
 */
import Style from "./Style";

/**
 *
 * @param {String} label
 * @param {Function} onPress
 */
const Button = ({ label, onPress }) => (
  <TouchableOpacity style={Style.button} onPress={onPress}>
    <Text>{label}</Text>
  </TouchableOpacity>
);

export default Button;

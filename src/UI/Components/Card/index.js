"use strict";

/**
 * Npm imports
 */
import React from "react";
import { View, Image, Text } from "react-native";

/**
 * Local imports
 */
import Style from "./Style";

/**
 *
 * @param {String} artworkUrl100
 * @param {String} artistName
 * @param {String} trackName
 */
const Card = ({ artworkUrl100, artistName, trackName }) => (
  <View style={Style.cardView}>
    <Image
      style={{ width: 100, height: 100 }}
      source={{ uri: artworkUrl100 }}
    />
    <View style={Style.labelView}>
      <Text style={Style.artistName}>{artistName}</Text>
      <Text>{trackName}</Text>
      <Text>{trackName}</Text>
    </View>
  </View>
);

export default Card;

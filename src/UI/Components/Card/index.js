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
import Button from "../../Components/Button";

/**
 *
 * @param {String} artworkUrl100
 * @param {String} artistName
 * @param {String} length
 * @param {String} trackName
 */
const Card = props => {
  const { artworkUrl100, artistName, trackName, length, navigate } = props;

  console.log(navigate);

  return (
    <View style={Style.cardView}>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: artworkUrl100 }}
      />
      <View style={Style.labelView}>
        <Text style={Style.artistName}>{artistName}</Text>
        <Text>{trackName}</Text>
        <Text>{length}</Text>
      </View>
      <Button
        onPress={() => {
          console.log("OK JE OASSEZ LA");
          navigate("Details");
        }}
        label="Details"
      />
    </View>
  );
};

export default Card;

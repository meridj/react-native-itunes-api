"use strict";

/**
 * Npm imports
 */
import React from "react";
import { View, Image, Text } from "react-native";

/**
 * Local imports
 */
import convertMillisToMinutesAndSeconds from "../../../Utils/generic";
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
  const {
    artworkUrl100,
    artistName,
    trackName,
    trackTimeMillis,
    trackPrice,
    collectionName,
    navigate
  } = props;

  const length = convertMillisToMinutesAndSeconds(trackTimeMillis);

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
          navigate("Details", {
            artworkUrl100,
            artistName,
            trackName,
            trackPrice,
            collectionName,
            length
          });
        }}
        label="Details"
      />
    </View>
  );
};

export default Card;

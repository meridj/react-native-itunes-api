"use strict";

/**
 * Npm imports
 */
import React from "react";
import { View, Text, Image } from "react-native";

/**
 * Local imports
 */
import Style from "./Style";

const DetailsScene = ({ navigation }) => {
  const songDetails = [
    navigation.getParam("artistName"),
    navigation.getParam("collectionName"),
    navigation.getParam("trackName"),
    `${navigation.getParam("trackPrice")}$`,
    navigation.getParam("length")
  ];

  const songDetailsToRender = songDetails.map((label, key) => (
    <Text key={key}>{label}</Text>
  ));

  return (
    <View style={Style.homeFlatList}>
      <Image
        style={{ width: 512, height: 512 }}
        source={{ uri: navigation.getParam("artworkUrl100") }}
      />
      {songDetailsToRender}
    </View>
  );
};

export default DetailsScene;

"use strict";

/**
 * Npm imports
 */
import React from "react";
import { FlatList, Text } from "react-native";

/**
 * Local imports
 */
import Style from "./Style";

const HomeScene = props => {
  return (
    <FlatList
      style={Style.homeFlatList}
      data={[
        { key: "Devin" },
        { key: "Jackson" },
        { key: "James" },
        { key: "Joel" },
        { key: "John" },
        { key: "Jillian" },
        { key: "Jimmy" },
        { key: "Julie" }
      ]}
      renderItem={({ item }) => (
        <Text style={{ margin: 50, height: 100, width: 100 }}>{item.key}</Text>
      )}
    />
  );
};

export default HomeScene;

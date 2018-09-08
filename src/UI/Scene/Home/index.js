"use strict";

/**
 * Npm imports
 */
import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import { connect } from "react-redux";

/**
 * Local imports
 */
import Style from "./Style";
import * as actions from "../../../Business/Action/";

class HomeScene extends Component {
  componentDidMount() {
    this.props.apiRequest();
  }

  render() {
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
          <Text style={{ margin: 50, height: 100, width: 100 }}>
            {item.key}
          </Text>
        )}
      />
    );
  }
}

const mapStateToProps = ({ songs }) => {
  return { songs };
};

export default connect(
  mapStateToProps,
  actions
)(HomeScene);

"use strict";

/**
 * Npm imports
 */
import React, { Component } from "react";
import { ScrollView } from "react-native";
import { connect } from "react-redux";

/**
 * Local imports
 */
import convertMillisToMinutesAndSeconds from "../../../Utils/generic";
import Style from "./Style";
import Card from "../../Components/Card";
import Button from "../../Components/Button";
import * as actions from "../../../Business/Action/";

/**
 *
 * @param {String} artworkUrl100
 * @param {String} artistName
 * @param {String} length
 * @param {String} trackName
 */
class HomeScene extends Component {
  componentDidMount() {
    this.props.apiRequest();
  }

  render() {
    const { songs, apiRequest, navigation } = this.props;

    return (
      <ScrollView style={Style.homeFlatList}>
        {songs.songsList.map(songDatas => (
          <Card
            key={songDatas.trackId.toString()}
            navigate={navigation.navigate}
            {...songDatas}
          />
        ))}
        <Button onPress={apiRequest} label="Load more ..." />
      </ScrollView>
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

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

class HomeScene extends Component {
  componentDidMount() {
    this.props.apiRequest();
  }

  render() {
    const { songsList } = this.props.songs;
    const parsedSongsList = songsList.map(
      ({ trackId, artistName, artworkUrl100, trackName, trackTimeMillis }) => {
        return {
          key: trackId.toString(),
          artistName,
          artworkUrl100,
          trackName,
          length: convertMillisToMinutesAndSeconds(trackTimeMillis)
        };
      }
    );

    return (
      <ScrollView style={Style.homeFlatList}>
        {parsedSongsList.map(songDatas => (
          <Card {...songDatas} />
        ))}
        <Button onPress={() => console.log("wesh")} label="Load more ..." />
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

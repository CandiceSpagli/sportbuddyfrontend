import React, { useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Button } from "react-native-elements";

// redux
import { connect } from "react-redux";
// expo blur
import { BlurView } from "expo-blur";

function SportsSettingsModal(props) {
  return <Modal animationType="fade" transparent={true} visible={true}></Modal>;
}
function mapDispatchToProps(dispatch) {
  return {
    onButtonClick: function (sports) {
      console.log("CLICK ");
      console.log("SPORTS", sports);

      dispatch({ type: "buttonClicked" });
    },
  };
}

export default connect(null, mapDispatchToProps)(SportsSettingsModal);

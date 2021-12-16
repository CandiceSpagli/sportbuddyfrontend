import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import { connect } from "react-redux";

// icons
import { FontAwesome5 } from "@expo/vector-icons";

function BuddieCard(props) {
  console.log("buddieCard", props);
  console.log("user", user);
  const user = {
    firstname: props.firstname,
    lastname: props.lastname,
    sport: props.sport,
    level: props.level,
    date: props.date,
    time: props.time,
    location: props.location,
    picture: props.picture,
    sessionId: props.sessionId,
  };

  const onCardPress = () => {
    // console.log('hey');
    props.cardPressed(user);
    // console.log('users Array !!', user);
  };

  const tabLevel = [];
  for (var i = 0; i < 3; i++) {
    let color = "#DCDCDC";
    if (i < props.level) {
      color = "#f42c04";
    }
    tabLevel.push(
      <FontAwesome5 key={i} name="medal" size={24} color={color} />
    );
  }
  console.log("PROPS", props);
  return (
    <TouchableHighlight
      style={{
        borderRadius: 50,
      }}
      underlayColor="white"
      onPress={() => onCardPress()}
    >
      <View style={{ marginBottom: 15 }}>
        <View>
          <Image style={styles.profilBox} source={{ uri: props.picture }} />
        </View>
        <View style={{ marginLeft: 20, marginRight: 20 }}>
          <Text style={styles.kmContent}>à 0.2km</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={styles.textContent}>{props.firstname}</Text>
              <Text style={styles.textContent}>{props.lastname}</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <View style={{ flexDirection: "row" }}>
                {/* <FontAwesome5 name="medal" size={24} color="#f42c04" />
              <FontAwesome5 name="medal" size={24} color="#f42c04" />
              <FontAwesome5 name="medal" size={24} color="#f42c04" /> */}
                {tabLevel}
              </View>
              <Text style={styles.textContentwColor}>{props.sport}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  kmContent: {
    fontSize: 20,
    // marginLeft: 5,
  },
  textContent: {
    fontSize: 20,
  },
  textContentwColor: {
    fontSize: 20,
    color: "#f42c04",
  },
  profilBox: {
    flexDirection: "row",
    height: 175,
    width: 175,
    margin: 10,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

function mapDispatchToProps(dispatch) {
  return {
    cardPressed: function (user) {
      console.log("cardPressed!");
      dispatch({ type: "cardClicked", user });
    },
  };
}

export default connect(null, mapDispatchToProps)(BuddieCard);

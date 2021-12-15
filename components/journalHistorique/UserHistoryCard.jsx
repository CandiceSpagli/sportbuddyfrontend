import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Badge } from "react-native-elements";

// icons
import { FontAwesome5 } from "@expo/vector-icons";
import userInfosModalReducer from "../../reducers/userInfosModal.reducer";

function UserHistoryCard(props) {
  const tabLevel = [];
  for (var i = 0; i < 3; i++) {
    let color = "#DCDCDC";
    if (i < 3) {
      color = "#f42c04";
    }
    tabLevel.push(
      <FontAwesome5
        style={{ marginLeft: 1, marginRight: 1 }}
        key={i}
        name="medal"
        size={15}
        color={color}
      />
    );
  }

  return (
    <View style={styles.cardsContainer}>
      <TouchableOpacity style={styles.profilCard}>
        <Image
          style={styles.pic}
          source={require("../../img/staticImg/user.jpg")}
        />
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.nameText}></Text>
          <Text style={styles.loca}>9 Av. des Papalins, 98000 Monaco</Text>
          <View style={styles.infos}>
            <View style={{ marginRight: 5, flexDirection: "row" }}>
              <Text style={styles.sportBadge}>Boxe</Text>
              {tabLevel}
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.dateInfosText}>06/12/21</Text>
              <Text style={styles.dateInfosText}>10:15</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    // backgroundColor: "yellow",
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  profilCard: {
    alignItems: "center",
    // backgroundColor: "green",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
  },
  pic: {
    height: 65,
    width: 65,
    borderRadius: 100,
    marginRight: 20,
  },
  nameText: {
    fontSize: 20,
  },
  infos: {
    flexDirection: "row",
  },
  dateInfosText: {
    color: "#f42c04",
    marginRight: 5,
  },
  sportBadge: {
    color: "#f42c04",
    marginRight: 5,
  },
  loca: {
    margin: 2,
    marginTop: 4,
  },
});

export default UserHistoryCard;

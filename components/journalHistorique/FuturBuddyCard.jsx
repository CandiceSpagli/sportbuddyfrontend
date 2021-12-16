import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Badge, Button } from "react-native-elements";

// icons
import { Entypo } from "@expo/vector-icons";

function FuturBuddyCard() {
  return (
    <View style={styles.cardsContainer}>
      <TouchableOpacity style={styles.profilCard}>
        <Image
          style={styles.pic}
          source={require("../../img/staticImg/user.jpg")}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.nameText}>Christelle Degiovanni</Text>
            <Text style={styles.loca}>9 Av. des Papalins, 98000 Monaco</Text>
            <View style={styles.infos}>
              <Text style={styles.dateInfosText}>06/12/21</Text>
              <Text style={styles.dateInfosText}>10:15</Text>
              <Badge
                badgeStyle={styles.sportBadge}
                textStyle={{ fontSize: 20 }}
                value="Course"
              />
            </View>
          </View>
          <TouchableOpacity style={{ padding: 10, marginLeft: 10 }}>
            <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  profilCard: {
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 2,
    borderRadius: 60,
    alignItems: "center",
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
    marginTop: 5,
    alignItems: "center",
  },
  dateInfosText: {
    margin: 2,
    marginRight: 10,
    color: "#f42c04",
    fontSize: 20,
  },
  sportBadge: {
    backgroundColor: "black",
    color: "white",
    borderRadius: 60,
    width: 80,
    height: 25,
    borderWidth: 0,
  },
  loca: {
    margin: 2,
    marginTop: 4,
  },
});

export default FuturBuddyCard;

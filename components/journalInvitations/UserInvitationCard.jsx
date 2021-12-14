import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Badge } from "react-native-elements";

// icons
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

// UserProfilScreen
import UserProfilScreen from '../../screens/UserProfilScreen'

function UserInvitationCard(props) {
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
        size={30}
        color={color}
      />
    );
  }

  const profilPressed = () => {
    props.navigation.navigate('UserProfilScreen')
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Badge
            badgeStyle={styles.sportBadge}
            textStyle={{ fontSize: 40 }}
            value="Course"
          />
          {tabLevel}
        </View>
        <Text style={styles.loca}>9 Av. des Papalins, 98000 Monaco</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.timeText}>06/12/21</Text>
            <Text style={styles.timeText}>10:15</Text>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: 30,
            }}
            onPress={() => profilPressed()}
          >
            <Image
              style={styles.pic}
              source={require("../../img/staticImg/user.jpg")}
            />
            <Text style={styles.firstname}>Candice</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: "center" }}>
          <TouchableOpacity style={styles.acceptBtn}>
            <Text style={{ fontSize: 40, color: "white" }}>Accepter !</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{
          position: "absolute",
          height: 60,
          width: 60,
          backgroundColor: "black",
          borderRadius: 60,
          top: 30,
          right: 25,
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        <Entypo name="cross" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "flex-start",
    alignItems: "center",
  },
  cardContainer: {
    backgroundColor: "white",
    width: 340,
    height: 340,
    borderRadius: 60,
    borderWidth: 2,
    marginTop: 40,
    padding: 25,
    alignItems: "center",
  },
  sportBadge: {
    backgroundColor: "black",
    color: "white",
    borderRadius: 60,
    width: 130,
    height: 40,
    borderWidth: 0,
    marginRight: 10,
  },
  loca: {
    fontSize: 35,
    marginTop: 10,
    marginBottom: 10,
  },
  timeText: {
    fontSize: 35,
    color: "#f42c04",
  },
  pic: {
    height: 75,
    width: 75,
    borderRadius: 100,
    // marginLeft: 30,
    borderWidth: 2,
    borderColor: "#f42c04",
  },
  firstname: {
    // position: "absolute",
    fontSize: 20,
    marginTop: -15,
    // marginLeft: 142,
    backgroundColor: "black",
    color: "white",
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 7,
    paddingRight: 7,
    shadowColor: "black",
    shadowRadius: 12,
    shadowOpacity: 0.2,
  },
  acceptBtn: {
    backgroundColor: "#f42c04",
    borderRadius: 50,
    height: 55,
    width: 230,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UserInvitationCard;

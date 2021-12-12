import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function UserSearchCard() {
  return (
    <View style={styles.cardsContainer}>
      <View style={styles.profilCard}>
        <Image
          style={styles.pic}
          source={require("../../img/staticImg/user.jpg")}
        />
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.nameText}>Candice Spagli</Text>
          <View style={styles.sportBox}>
            <Text style={styles.sportsText}>Course</Text>
            <Text style={styles.sportsText}>Boxe</Text>
            <Text style={styles.sportsText}>Fitness</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    // backgroundColor: 'blue',
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  profilCard: {
    alignItems: "center",
    // backgroundColor: "green",
    flexDirection: "row",
  },
  pic: {
    height: 65,
    width: 65,
    borderRadius: 100,
    marginRight: 20,
  },
  nameText: {
    // margin: 2,
    fontSize: 20,
  },
  sportBox: {
    // backgroundColor: 'yellow',
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  sportsText: {
    margin: 2,
    marginRight: 10,
    color: "#f42c04",
  },
});

export default UserSearchCard;

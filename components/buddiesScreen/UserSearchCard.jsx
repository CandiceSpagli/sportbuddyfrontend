import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function UserSearchCard(props) {
  const sportsArray = props.sports;
  console.log("sportsArray", sportsArray);

  const sportsMAP = sportsArray.map((sports, index) => {
    return (
      <Text style={styles.sportsText} key={index}>
        {sports.type}
      </Text>
    );
  });

  const cardPressed = () => {
    props.navigation.navigate('UserProfilScreen')
  }

  return (
    <View style={styles.cardsContainer}>
      <TouchableOpacity
        style={styles.profilCard}
        onPress={() => cardPressed()}
      >
        <Image
          style={styles.pic}
          source={require("../../img/staticImg/user.jpg")}
        />
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.nameText}>
            {props.firstname} {props.lastname}
          </Text>
          <View style={styles.sportBox}>
            {sportsMAP}
          </View>
        </View>
      </TouchableOpacity>
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
    // justifyContent: "space-between",
    marginTop: 5,
  },
  sportsText: {
    margin: 2,
    marginRight: 10,
    color: "#f42c04",
  },
});

export default UserSearchCard;

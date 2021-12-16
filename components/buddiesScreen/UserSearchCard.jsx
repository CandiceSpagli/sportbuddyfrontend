import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";

function UserSearchCard(props) {
  const sportsArray = props.sports;
  console.log("sportsArray", sportsArray);

  const sportsMAP = sportsArray.map((sports, index) => {
    return (
      <Text style={styles.sportsText} key={index}>
        {sports.name}
      </Text>
    );
  });

  const userInfos = {
    firstname: props.firstname,
    lastname: props.lastname,
    sports: props.sports,
    desc: props.desc,
    picture: props.picture,
  };

  const cardPressed = () => {
    props.navigation.navigate("UserProfilScreen");
    props.cardPressed(userInfos);
  };

  return (
    <View style={styles.cardsContainer}>
      <TouchableOpacity style={styles.profilCard} onPress={() => cardPressed()}>
        <Image style={styles.pic} source={{ uri: props.picture }} />
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.nameText}>
            {props.firstname} {props.lastname}
          </Text>
          <View style={styles.sportBox}>{sportsMAP}</View>
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

function mapDispatchToProps(dispatch) {
  return {
    cardPressed: function (userInfos) {
      console.log("cardPressed!");
      dispatch({ type: "userCardClicked", userInfos });
    },
  };
}

export default connect(null, mapDispatchToProps)(UserSearchCard);

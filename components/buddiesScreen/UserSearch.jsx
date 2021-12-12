import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import UserSearchCard from "./UserSearchCard";

function UserSearch() {
  return (
    <ScrollView style={styles.container}>
      <UserSearchCard />
      <UserSearchCard />
      <UserSearchCard />
      <UserSearchCard />
      <UserSearchCard />
      <UserSearchCard />
      <UserSearchCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    flex: 1,
    marginTop: 20,
  },
  cardsContainer: {
    // backgroundColor: 'blue',
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
},
profilCard: {
    alignItems: 'center',
    // backgroundColor: "green",
    flexDirection: 'row',
  },
  pic: {
    height: 70,
    width: 70,
    borderRadius: 100,
    marginRight: 25
  },
  nameText: {
    // margin: 2,
    fontSize: 20
  },
  sportBox: {
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  sportsText : {
    margin: 2,
    marginRight: 10,
    color: '#f42c04'
  }
});

export default UserSearch;

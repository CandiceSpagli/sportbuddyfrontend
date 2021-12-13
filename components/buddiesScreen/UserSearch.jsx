import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import UserSearchCard from "./UserSearchCard";

function UserSearch(props) {
  const [usersList, setUsersList] = useState([]);
  // console.log('usersList', usersList);
  useEffect(() => {
    async function usersListInfos() {
      // const rawResponse = await fetch('http://192.168.1.29:3000/searchScreen')
      const rawResponse = await fetch("http://10.3.11.9:3000/searchScreen");
      const response = await rawResponse.json();
      setUsersList(response.users);
    }
    usersListInfos();
  }, []);

  const usersListMAP = usersList.map((users, index) => {
    return (
      <TouchableOpacity key={index}>
        <UserSearchCard
          firstname={users.firstname}
          lastname={users.lastname}
          sports={users.sports}
          navigation={props.navigation}
        />
      </TouchableOpacity>
    );
  });

  return (
    <ScrollView style={styles.container}>
      <View style={{ marginBottom: 30 }}>{usersListMAP}</View>
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
    alignItems: "center",
    // backgroundColor: "green",
    flexDirection: "row",
  },
  pic: {
    height: 70,
    width: 70,
    borderRadius: 100,
    marginRight: 25,
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

export default UserSearch;

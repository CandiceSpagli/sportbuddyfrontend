import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";

// native elements
import { Button } from "react-native-elements";

// f42c04

// icons
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

// components
import BuddieCard from "../components/buddiesScreen/BuddieCard";
import SportsButtons from "../components/buddiesScreen/SportsButtons";

function buddiesScreen() {
  const [isPlusClicked, setIsPlusClicked] = useState(false)
  console.log('isPlusClicked' , isPlusClicked);
  const morePrecise = () => {
    setIsPlusClicked(isPlusClicked === false ? true : false)
  }

  let size = 70
  if (!isPlusClicked) {
    size = 70
  } else {
    size = 40
  }
  return (
    <View style={styles.container}>
      <View style={{alignItems:'center',paddingTop:35}}>
        <Text style={styles.title}>Buddies</Text>
      </View>
      <View style={styles.boxInteraction}>
        <View style={{flexDirection: 'row',alignItems:'center'}}>
          <Feather
            style={{
              position: 'absolute',
              marginLeft: 15
            }}
            name="search" size={24} color="black"
          />
          <TextInput style={styles.input} placeholder="Rechercher..." />
        </View>
        <View style={{flexDirection: 'row',alignItems:'center'}}>
          <Button style={styles.buddiesBtn} type="clear" title="" />
          <EvilIcons
            name="plus" size={70} color="black"
            onPress={() => {morePrecise()}}
          />
        </View>
      </View>
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <SportsButtons/>
        </ScrollView>
      </View>
      <View>
        <ScrollView
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: 'center'
          }}
          showsVerticalScrollIndicator={false}
        >
          <BuddieCard/>
          <BuddieCard/>
          <BuddieCard/>
          <BuddieCard/>
          <BuddieCard/>
          <BuddieCard/>
          <BuddieCard/>
          <BuddieCard/>
          <BuddieCard/>
          <BuddieCard/>
          <BuddieCard/>
          <BuddieCard/>
          <BuddieCard/>
          <BuddieCard/>
          <BuddieCard/>
          <BuddieCard/>
          <BuddieCard/>
          <BuddieCard/>
          <BuddieCard/>
          <BuddieCard/>
          <BuddieCard/>
          <BuddieCard/>
          <BuddieCard/>
          <BuddieCard/>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  title: {
    fontSize: 135
  },
  boxInteraction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    margin: 5,
    marginLeft: 20,
    marginRight: 10

  },
  input: {
    borderWidth: 2,
    padding: 12,
    paddingLeft: 45,
    paddingRight: 60,
    borderRadius: 50,
    fontSize: 20,
  },
  buddiesBtn: {
    backgroundColor: "#f42c04",
    borderRadius: 50,
    height: 50,
    width: 80,
    marginLeft: 10,
  },
  boxContainer: {
    flexDirection: "row",
  },
});

export default buddiesScreen;

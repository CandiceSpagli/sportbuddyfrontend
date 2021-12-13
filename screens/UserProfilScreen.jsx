import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Overlay, Card, Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

// navbar
import Navbar from "../components/buddiesScreen/navbar/NavBarPopUp";

import Carousel from "react-native-snap-carousel";
import { useFonts } from "expo-font";

// icons
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

function UserProfilScreen(props) {
  const [loaded] = useFonts({
    bohemianSoul: require("../assets/fonts/bohemianSoul.otf"),
  });

  if (!loaded) {
    return null;
  }

  const sportsCards = ["one", "two", "three"];
  const renderItem = () => {
    return (
      <View style={styles.sportCard}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.sportSticker}
            source={require("../img/staticImg/stickers/course.png")}
          />
        </View>
        <Text style={styles.sportTitle}>Course</Text>
        <View style={{ marginLeft: 30, marginTop: -5 }}>
          <View style={{ flexDirection: "row", alignItems: "baseline" }}>
            <Text style={{ fontSize: 50, fontWeight: "bold" }}>25 </Text>
            <Text style={styles.sportCardText}>séances !</Text>
          </View>
          <Text style={styles.sportCardText}>Niveau : </Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <FontAwesome5
              style={{ marginRight: 2 }}
              name="medal"
              size={40}
              color={"#f42c04"}
            />
            <FontAwesome5
              style={{ marginLeft: 2, marginRight: 2 }}
              name="medal"
              size={40}
              color={"#f42c04"}
            />
            <FontAwesome5
              style={{ marginLeft: 2 }}
              name="medal"
              size={40}
              color={"#f42c04"}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={{ backgroundColor: "white" }}>
        <View style={{ alignItems: "center", paddingTop: 35 }}>
          <TouchableOpacity>
            <Text style={styles.title}>Profil</Text>
            <AntDesign
              style={{ position: "absolute", top: 47, left: -40 }}
              name="left"
              size={30}
              color="black"
            />
          </TouchableOpacity>
          <View
            style={{
              shadowColor: "black",
              shadowRadius: 12,
              shadowOpacity: 0.2,
            }}
          >
            <Image
              style={styles.profil}
              source={require("../img/staticImg/user.jpg")}
            />
          </View>
          <Text style={styles.firstname}>Other</Text>
          <Text style={styles.lastname}>User !</Text>
          <View style={styles.paragraph}>
            <Text style={{ fontSize: 50, margin: 10 }}>"</Text>
            <Text style={styles.description}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
              dolores, officiis provident aspernatur sapiente dolorum culpa
            </Text>
            <Text style={{ fontSize: 50, margin: 10 }}>"</Text>
          </View>
        </View>
      </View>
      <View style={styles.scrollContainer}>
        <Image
          style={styles.abBG}
          source={require("../img/staticImg/profil_ab_bg.jpg")}
        />
        <Carousel
          layout={"stack"}
          data={sportsCards}
          renderItem={renderItem}
          sliderWidth={550}
          itemWidth={370}
        />
      </View>
      <Navbar navigation={props.navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 115,
    fontFamily: "bohemianSoul",
  },
  profil: {
    height: 175,
    width: 175,
    borderRadius: 100,
  },
  firstname: {
    fontSize: 30,
    marginTop: -50,
    backgroundColor: "black",
    color: "white",
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 15,
    paddingRight: 15,
    shadowColor: "black",
    shadowRadius: 12,
    shadowOpacity: 0.2,
  },
  lastname: {
    fontSize: 30,
    backgroundColor: "black",
    color: "white",
    paddingBottom: 3,
    paddingLeft: 15,
    paddingRight: 15,
    shadowColor: "black",
    shadowRadius: 12,
    shadowOpacity: 0.2,
  },
  paragraph: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 60,
    marginRight: 60,
    alignItems: "center",
  },
  description: {
    fontSize: 17,
    textAlign: "center",
  },
  scrollContainer: {
    alignItems: "center",
  },
  abBG: {
    position: "absolute",
    top: 0,
    paddingTop: 700,
    width: 450,
    height: 660,
  },
  sportCard: {
    marginTop: 30,
    backgroundColor: "white",
    height: 370,
    width: 370,
    borderRadius: 60,
    shadowColor: "black",
    shadowRadius: 12,
    shadowOpacity: 0.05,
    opacity: 0.9,
    // alignItems: "center",
  },
  sportTitle: {
    fontSize: 70,
    color: "#f42c04",
    transform: [{ rotate: "270deg" }],
    position: "absolute",
    bottom: 0,
    right: 0,
    marginBottom: 110,
    marginRight: -30,
  },
  sportSticker: {
    height: 240,
    width: 240,
    marginTop: -30,
  },
  sportCardText: {
    fontSize: 40,
  },
});

export default UserProfilScreen;

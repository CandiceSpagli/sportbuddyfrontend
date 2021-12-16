import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Overlay, Card, Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";

// navbar
import Navbar from "../components/buddiesScreen/navbar/NavBarPopUp";
import SportsSettingsModal from "../components/buddiesScreen/SportsSettingsModal";

import Carousel from "react-native-snap-carousel";
import { useFonts } from "expo-font";

// icons
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

function ProfilScreen(props) {
  // const [myLevel, setMyLevel] = useState(0);
  // console.log("myLevel from ProfilScreen", myLevel);
  // const goToSession = () => {
  //   props.navigation.navigate("Session");
  // };

  const [firstname, setFirstname] = useState("");
  // console.log("FIRSTNAME PROFILSCREEN", firstname);
  const [lastname, setLastname] = useState("");
  // console.log("LASTNAME PROFILSCREEN", lastname);
  const [level, setLevel] = useState("");
  // console.log("LEVEL PROFILSCREEN", level);
  const [picture, setPicture] = useState("");
  // console.log("PICTURE PROFILSCREEN", picture);
  const [desc, setDesc] = useState("");
  // console.log("DESC PROFILSCREEN", desc);
  const [sports, setSports] = useState([]);
  console.log("SPORTSSS PROFILSCREEN", sports.level);

  // const [loaded] = useFonts({
  //   bohemianSoul: require("../assets/fonts/bohemianSoul.otf"),
  // });

  // if (!loaded) {
  //   return null;
  // }

  useEffect(() => {
    // console.log("firstnameuser", user);
    async function firstnameProfil() {
      console.log("props.token from profilScreen", props.token);
      const rawResponse = await fetch(
        // `http://192.168.1.13:3000/profilScreen?token=${props.token}`
        `http://10.3.11.5:3000/profilScreen?token=${props.token}`
        // `http://10.3.11.6:3000/profilScreen?token=${props.token}`
      );
      const response = await rawResponse.json();
      console.log("response", response);
      setFirstname(response.firstname);
      setLastname(response.lastname);
      setSports(response.sport);
      setPicture(response.picture);
      setDesc(response.desc);
      setPicture(response.picture);
    }
    firstnameProfil();
  }, []);

  const tabLevel = [];
  for (var i = 0; i < 3; i++) {
    let color = "#DCDCDC";
    if (i < 2) {
      color = "#f42c04";
    }
    let count = i + 1;
    tabLevel.push(
      <FontAwesome5
        style={{ marginRight: 2 }}
        key={count}
        name="medal"
        size={40}
        color={color}
        // onPress={() => setMyLevel(count)}
      />
    );
  }

  // var sportObject = sports.map((sportsinfo, index) => {
  //   console.log("sports du map", sportsinfo);
  // });
  // var sportName = sportObject.name;

  const userSettingsPressed = () => {
    props.navigation.navigate("Settings");
  };

  const sportsCards = sports;
  // console.log("sportsCards", sportsCards);
  const renderItem = ({ item, index }) => {
    // console.log("ITEM from renderitem", item);
    // console.log("INDEX from renderitem", index);
    return (
      <View style={styles.sportCard}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.sportSticker}
            source={require("../img/staticImg/stickers/course.png")}
          />
        </View>
        <Text style={styles.sportTitle}>{item.name}</Text>
        <View style={{ marginLeft: 30, marginTop: -5 }}>
          <View style={{ flexDirection: "row", alignItems: "baseline" }}>
            <Text style={{ fontSize: 50, fontWeight: "bold" }}>12 </Text>
            <Text style={styles.sportCardText}>séances !</Text>
          </View>
          <Text style={styles.sportCardText}>Niveau :{item.level} </Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            {/* <FontAwesome5
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
            /> */}
            {tabLevel}
          </View>
        </View>
      </View>
    );
  };

  // console.log('_______renderItem', renderItem.level);

  return (
    <>
      <View style={{ backgroundColor: "white" }}>
        <View style={{ alignItems: "center", paddingTop: 35 }}>
          <Text style={styles.title}>Profil</Text>
          <View
            style={{
              shadowColor: "black",
              shadowRadius: 12,
              shadowOpacity: 0.2,
            }}
          >
            <Image style={styles.profil} source={{ uri: picture }} />

            <TouchableOpacity
              style={{ position: "absolute", right: -20, top: 0 }}
              onPress={() => userSettingsPressed()}
            >
              <AntDesign name="setting" size={35} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.firstname}>{firstname}</Text>
          <Text style={styles.lastname}>{lastname}</Text>
          <View style={styles.paragraph}>
            <Text style={{ fontSize: 50, margin: 10 }}>"</Text>
            <Text style={styles.description}>{desc}</Text>
            <Text style={{ fontSize: 50, margin: 10 }}>"</Text>
          </View>
        </View>
      </View>
      {/* <ScrollView
        style={styles.scrollContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.cardContainer}>
        <View style={styles.sportCard}></View>

        </View>
      </ScrollView> */}
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
    // fontFamily: "bohemianSoul",
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
  // cardContainer: {
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
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
    // left:250,
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
function mapStateToProps(state) {
  return { token: state.token };
}

export default connect(mapStateToProps, null)(ProfilScreen);

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  Image,
  TouchableOpacity,
} from "react-native";

// native elements
import { Button } from "react-native-elements";
// redux
import { connect } from "react-redux";
// DateTimePicker
import DateTimePicker from "@react-native-community/datetimepicker";
// useFonts
import { useFonts } from "expo-font";

// f42c04

// icons
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

// components
import BuddiePopUp from "../components/buddiesScreen/BuddiePopUp";
import SessionPopUp from "../components/buddiesScreen/SessionPopUp";
import BuddiesListFilter from "../components/buddiesScreen/BuddiesListFilter";
import UserSearch from "../components/buddiesScreen/UserSearch";
// navbar
import Navbar from "../components/buddiesScreen/navbar/NavBarPopUp";

function BuddiesScreen(props) {
  const [isPlusClicked, setIsPlusClicked] = useState(false);
  const [isValidatePressed, setIsValidatePressed] = useState(false);
  const [myLevel, setMyLevel] = useState(0);
  const [isInputClicked, setIsInputClicked] = useState(false);
  // const [isSessionBtnClicked, setisSessionBtnClicked] = useState(false);

  // date picker
  const [date, setDate] = useState(new Date());

  // console.log('--date', date);
  const onChangeTime = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const morePrecise = () => {
    setIsPlusClicked(isPlusClicked === false ? true : false);
    setIsValidatePressed(false);
  };

  const plusIcon = () => {
    if (!isPlusClicked) {
      return (
        <EvilIcons
          name="plus"
          size={75}
          color="black"
          onPress={() => {
            morePrecise();
          }}
        />
      );
    } else {
      return (
        <EvilIcons
          name="minus"
          size={75}
          color="black"
          onPress={() => {
            morePrecise();
          }}
        />
      );
    }
  };

  const tabLevel = [];
  for (var i = 0; i < 3; i++) {
    let color = "#DCDCDC";
    if (i < myLevel) {
      color = "black";
    }
    let count = i + 1;
    tabLevel.push(
      <FontAwesome5
        key={i}
        style={{ marginLeft: 5, marginRight: 5 }}
        name="medal"
        size={45}
        color={color}
        onPress={() => setMyLevel(count)}
      />
    );
  }

  const onValidate = () => {
    setIsPlusClicked(false);
    setIsValidatePressed(true);
  };

  const onClear = () => {
    setMyLevel(0);
    setDate(new Date());
    setIsValidatePressed(false);
  };

  const plusBtn = () => {
    if (isPlusClicked) {
      return (
        <View style={styles.plusContainer}>
          <View style={{ margin: 30 }}>
            <View
              style={{
                borderBottomWidth: 2,
                paddingBottom: 5,
                marginBottom: 20,
                flexDirection: "row",
              }}
            >
              <Text style={styles.textPlus}>Date</Text>
              <DateTimePicker
                style={{
                  flex: 1,
                }}
                testID="dateTimePicker"
                value={date}
                mode={"date"}
                is24Hour={true}
                display="default"
                onChange={(event, date) => onChangeTime(event, date)}
              />
            </View>
            <View
              style={{
                borderBottomWidth: 2,
                paddingBottom: 5,
                marginBottom: 20,
                flexDirection: "row",
              }}
            >
              <Text style={styles.textPlus}>Heure</Text>
              <DateTimePicker
                style={{
                  flex: 1,
                }}
                testID="dateTimePicker"
                value={date}
                mode={"time"}
                is24Hour={true}
                display="default"
                onChange={(event, date) => onChangeTime(event, date)}
              />
            </View>
            <View
              style={{
                marginTop: 5,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button
                style={{
                  backgroundColor: "black",
                  borderRadius: 60,
                  width: 110,
                }}
                titleStyle={{
                  color: "white",
                  fontSize: 30,
                }}
                type="clear"
                title="Spot"
              />
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                {tabLevel}
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
                justifyContent: "space-between",
              }}
            >
              <Button
                style={{
                  borderRadius: 60,
                  borderWidth: 2,
                  borderColor: "#f42c04",
                  paddingLeft: 65,
                  paddingRight: 65,
                }}
                titleStyle={{
                  color: "#f42c04",
                  fontSize: 30,
                }}
                type="clear"
                title="Valider !"
                onPress={() => onValidate()}
              />
              <TouchableOpacity
                style={{
                  padding: 10,
                  borderRadius: 60,
                  borderWidth: 2,
                  borderColor: "black",
                  width:50,
                  alignItems:'center'
                }}
                onPress={() => onClear()}
              >
                <Entypo name="cross" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else {
      null;
    }
  };

  // console.log('isInputClicked', isInputClicked);
  const inputBooleanValue = () => {
    setIsInputClicked(isInputClicked === false ? true : false);
  };
  const inputBooleanValueWhenClosed = () => {
    setIsInputClicked(isInputClicked === false ? true : false);
    Keyboard.dismiss();
  };

  const onBuddiesBtn = () => {
    console.log(">>> onBuddiesBtn");
    // setisSessionBtnClicked(isSessionBtnClicked === false ? true : false);
    props.navigation.navigate("Session");
  };

  const searchInput = () => {
    if (!isInputClicked) {
      return (
        <View style={styles.boxInteraction}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather
              style={{
                position: "absolute",
                marginLeft: 15,
              }}
              name="search"
              size={24}
              color="black"
            />
            <TextInput
              style={styles.input}
              placeholder="Rechercher..."
              onFocus={() => inputBooleanValue()}
              keyboardShouldPersistTaps={true}
              // ref={inputRef}
              value=""
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* <Button style={styles.buddiesBtn} type="clear" title=""/> */}
            <TouchableOpacity
              style={styles.buddiesBtn}
              onPress={() => onBuddiesBtn()}
            >
              <Image
                source={require("../img/staticImg/icons/fight.png")}
                style={{
                  height: 55,
                  width: 55,
                }}
              />
            </TouchableOpacity>
            {plusIcon()}
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.boxInteraction}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather
              style={{
                position: "absolute",
                marginLeft: 15,
              }}
              name="search"
              size={24}
              color="black"
            />
            <TextInput
              style={styles.inputClicked}
              placeholder="Rechercher..."
            />
            <Entypo
              style={{
                position: "absolute",
                marginLeft: 335,
              }}
              name="cross"
              size={24}
              color="black"
              onPress={() => inputBooleanValueWhenClosed()}
            />
          </View>
        </View>
      );
    }
  };

  const [loaded] = useFonts({
    bohemianSoul: require("../assets/fonts/bohemianSoul.otf"),
  });

  if (!loaded) {
    return null;
  }

  let filterParamsObject = {}
  if (isValidatePressed) {
    filterParamsObject = {
      date,
      level: myLevel,
    };
  }

  return (
    <>
      <View style={styles.container}>
        {/* <SessionPopUp visible={isSessionBtnClicked} /> */}
        <BuddiePopUp user={props.userInfosModal} />
        <View style={{ alignItems: "center", paddingTop: 35 }}>
          <Text style={styles.title}>Buddies</Text>
        </View>
        {searchInput()}
        <View style={{ alignItems: "center" }}>{plusBtn()}</View>
        {!isInputClicked && (
          <BuddiesListFilter filterParams={filterParamsObject} />
        )}
        {isInputClicked && <UserSearch navigation={props.navigation} />}
      </View>
      <Navbar navigation={props.navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 115,
    fontFamily: "bohemianSoul",
  },
  boxInteraction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 5,
    marginLeft: 20,
    marginRight: 10,
  },
  input: {
    borderWidth: 2,
    padding: 15,
    paddingLeft: 45,
    paddingRight: 60,
    borderRadius: 50,
    fontSize: 20,
    marginTop: 3,
    marginBottom: 3,
  },
  inputClicked: {
    flex: 1,
    borderWidth: 2,
    padding: 15,
    paddingLeft: 45,
    paddingRight: 170,
    borderRadius: 50,
    fontSize: 20,
    marginTop: 3,
    marginBottom: 3,
  },
  buddiesBtn: {
    backgroundColor: "#f42c04",
    borderRadius: 50,
    height: 50,
    width: 80,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  plusContainer: {
    borderWidth: 2,
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 20,
    height: 300,
    width: 370,
  },
  textPlus: {
    fontSize: 30,
    marginRight: 165,
  },
});

function mapStateToProps(state) {
  return { userInfosModal: state.userInfosModal };
}

export default connect(mapStateToProps, null)(BuddiesScreen);

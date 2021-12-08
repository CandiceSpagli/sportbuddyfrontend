import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Keyboard,
} from "react-native";

// native elements
import { Button } from "react-native-elements";

// datePicker
import DatePicker from "react-native-datepicker";

// f42c04

// icons
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

// components
import BuddieCard from "../components/buddiesScreen/BuddieCard";
import SportsButtons from "../components/buddiesScreen/SportsButtons";
import BuddiePopUp from '../components/buddiesScreen/BuddiePopUp'
import { connect } from "react-redux";

function BuddiesScreen(props) {
  const [isPlusClicked, setIsPlusClicked] = useState(false)
  const [myLevel, setMyLevel] = useState(0)
  const [isInputClicked, setIsInputClicked] = useState(false)
  // date picker
  const [date, setDate] = useState(new Date());

  // console.log('composant relancé');
  // const inputRef = useRef(null)

  // useEffect(() => {
  //   console.log('useEffect inputRef', isInputClicked);
  //   if (isInputClicked) {
  //     console.log('useEffect , isInputClicked');
  //     inputRef.current.focus()
  //   }
  // }, [isInputClicked])

  // console.log('isPlusClicked' , isPlusClicked);
  const morePrecise = () => {
    setIsPlusClicked(isPlusClicked === false ? true : false);
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
  }

  const tabLevel = [];
  for (var i = 0; i < 3; i++) {
    let color = "#DCDCDC";
    if (i < myLevel) {
      color = "black";
    }
    let count = i + 1;
    tabLevel.push(
      <FontAwesome5
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
    setMyLevel(0);
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
              <DatePicker
                style={{
                  width: 90,
                  justifyContent: "center",
                }}
                date={date}
                mode="date"
                placeholder="select date"
                format="DD/MM/YYYY"
                minDate="01-01-1930"
                maxDate="01-01-2030"
                confirmBtnText="Confirmer"
                cancelBtnText="Annuler"
                customStyles={{
                  dateInput: {
                    borderWidth: 0,
                  },
                }}
                onDateChange={(date) => {
                  setDate(date);
                }}
                showIcon={false}
                hideText={false}
                // allowFontScaling={true}
              />
            </View>
            <View
              style={{
                borderBottomWidth: 2,
                paddingBottom: 5,
                marginBottom: 20,
              }}
            >
              <Text style={styles.textPlus}>Heure</Text>
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
            <Button
              style={{
                marginTop: 20,
                borderRadius: 60,
                borderWidth: 2,
                borderColor: "#f42c04",
              }}
              titleStyle={{
                color: "#f42c04",
                fontSize: 30,
              }}
              type="clear"
              title="Valider !"
              onPress={() => onValidate()}
            />
          </View>
        </View>
      );
    } else {
      null;
    }
  }

  // console.log('isInputClicked', isInputClicked);
  const inputBooleanValue = () => {
    setIsInputClicked(isInputClicked === false ? true : false);
  };
  const inputBooleanValueWhenClosed = () => {
    setIsInputClicked(isInputClicked === false ? true : false);
    Keyboard.dismiss();
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
            <Button style={styles.buddiesBtn} type="clear" title="" />
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
  }

  return (
    <View style={styles.container}>
      <BuddiePopUp
        user={props.userInfosModal}
      />
      <View style={{alignItems:'center',paddingTop:35}}>
          <Text style={styles.title}>Buddies</Text>
      </View>
        {searchInput()}
      <View style={{alignItems: 'center'}}>
        {plusBtn()}
      </View>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <SportsButtons />
        </ScrollView>
      </View>
      <View>
        <ScrollView
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          showsVerticalScrollIndicator={false}
        >
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
  container: {},
  title: {
    fontSize: 135,
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
  return {userInfosModal: state.userInfosModal}
}

export default connect(
  mapStateToProps,
  null
) (BuddiesScreen);

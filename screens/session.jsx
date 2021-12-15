import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, Platform, StyleSheet, Modal } from "react-native";

//Date & Time Picker
import DateTimePicker from "@react-native-community/datetimepicker";

//DropDown Button
import DropDownPicker from "react-native-dropdown-picker";

// navbar
import Navbar from "../components/buddiesScreen/navbar/NavBarPopUp";
// sessionPopUp
import SessionPopUp from "../components/buddiesScreen/SessionPopUp";

//icons
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

//MAP
import { connect } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import { Button } from "react-native-elements";

function session(props) {
  // const [date, setDate] = useState(new Date());
  // console.log("datefromSESSION", date);

  const [time, setTime] = useState();

  console.log("timefromSESSION", time);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("time");
  console.log("mode set from session", mode);
  const [show, setShow] = useState(true);

  const [myLevel, setMyLevel] = useState(0);
  console.log("MYLEVEL", myLevel);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Course", value: "course" },
    { label: "Fitness", value: "fitness" },
    { label: "Yoga", value: "yoga" },
  ]);

  // MARKER POUR LIEU DE RDV
  const [addRDV, setAddRDV] = useState({});
  console.log("addRDV", addRDV);

  const onChangeTime = (event, selectedDate) => {
    console.log("seletcedDate", selectedDate);
    // console.log("event", event);
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const onPressDate = (selectedDate) => {
    console.log("Selecteddate du picker modifiée", selectedDate);
    setDate(selectedDate);
  };

  const showTimepicker = () => {
    showMode("time");
  };

  // MARKER RDV

  const selectRDV = (evt) => {
    console.log("evt de selectRDV marker MAP", evt.nativeEvent.coordinate);
    setAddRDV(evt.nativeEvent.coordinate);
  };

  const handleSubmitSession = async () => {
    props.sessionBtnPressed(items)
    // props.navigation.navigate("Buddies");

    console.log("create A Session from Session", value);
    console.log("datea la creation", date);
    const data = await fetch("http://10.3.11.9:3000/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `token=${props.token}&date=${date}&sport=${value}&level=${myLevel}&long=${addRDV.longitude}&lat=${addRDV.latitude}`,
    });

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
        key={count}
        style={{ marginRight: 7 }}
        name="medal"
        size={50}
        color={color}
        onPress={() => setMyLevel(count)}
      />
    );
  }

  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={styles.abBG}
          source={require("../img/staticImg/profil_ab_bg.jpg")}
        />
        <View style={styles.container}>
          <View style={styles.contentPart}>
            <Text style={styles.contentTitle}>Date</Text>
            <DateTimePicker
              style={{ width: 90 }}
              testID="dateTimePicker"
              value={date}
              mode={"date"}
              is24Hour={true}
              display="default"
              onChange={(event, date) => onChangeTime(event, date)}
            />
          </View>
          <View style={styles.contentPart}>
            <Text style={styles.contentTitle}>Heure</Text>
            <DateTimePicker
              style={{ width: 60 }}
              testID="dateTimePicker"
              value={date}
              mode={"time"}
              is24Hour={true}
              display="default"
              onChange={(event, date) => onChangeTime(event, date)}
            />
          </View>
          <DropDownPicker
            style={styles.dropdownPicker}
            textStyle={{ fontSize: 20 }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Choisir un sport..."
            placeholderStyle={{
              color: "grey",
            }}
            listParentLabelStyle={{
              fontSize: 30,
              marginLeft: 40,
            }}
            dropDownContainerStyle={{
              backgroundColor: "rgba(255,255,255, 0.7)",
              width: 200,
              marginTop: 20,
              borderRadius: 60,
              borderTopWidth: 1,
              borderWidth: 2,
              padding: 10,
            }}
          />
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            {tabLevel}
          </View>
          <View
            style={{
              alignItems: "center",
              shadowColor: "black",
              shadowRadius: 12,
              shadowOpacity: 0.1,
              shadowOffset: { height: 10, width: 0 },
            }}
          >
            <MapView
              onPress={(evt) => {
                selectRDV(evt);
              }}
              style={{
                borderRadius: 60,
                height: 300,
                width: 300,
                marginTop: 10,
                backgroundColor: "black",
              }}
              mapType="mutedStandard"
              initialRegion={{
                latitude: 43.73108,
                longitude: 7.421164,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                key={i}
                pinColor="red"
                coordinate={addRDV}
                // title={POI.titre}
                // description={POI.description}
              />
            </MapView>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 12,
                marginTop: 10,
                marginBottom: 10,
                opacity: 0.5,
              }}
            >
              Placez un marqueur sur le lieu de départ de votre séance !
            </Text>
          </View>
          <View style={styles.locaPart}>
            <Entypo name="location-pin" size={50} color="#f42c04" />
            <Text style={styles.locaText}>Av. des Guelfes, 98000 Monaco</Text>
          </View>
          <Button
            style={styles.createBtn}
            type="clear"
            title="Créer !"
            titleStyle={{
              fontSize: 40,
              color: "white",
            }}
            onPress={(value) => handleSubmitSession(value)}
          />
        </View>
      </View>
      <Navbar navigation={props.navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 400,
    width: 300,
    backgroundColor: "rgba(244, 44, 4, 0.4)",
    alignContent: "center",
    borderRadius: 30,
  },
  textPlus: {
    fontSize: 20,
    marginRight: 165,
  },
  textPlusClic: {
    fontSize: 20,
  },
  container: {
    backgroundColor: "white",
    borderRadius: 60,
    height: 800,
    width: 370,
    shadowColor: "black",
    shadowRadius: 12,
    shadowOpacity: 0.1,
    padding: 40,
    justifyContent: "center",
  },
  createBtn: {
    backgroundColor: "#f42c04",
    borderRadius: 50,
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
  },
  abBG: {
    position: "absolute",
    width: 900,
    height: 1000,
    transform: [{ rotate: "270deg" }],
  },
  contentPart: {
    flexDirection: "row",
    borderBottomWidth: 2,
    alignItems: "center",
  },
  contentTitle: {
    fontSize: 40,
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  dropdownPicker: {
    borderRadius: 60,
    width: 200,
    marginTop: 20,
    backgroundColor: "transparent",
    borderWidth: 2,
  },
  locaPart: {
    flexDirection: "row",
    marginLeft: 40,
    marginRight: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  locaText: {
    fontSize: 30,
  },
});

function mapStateToProps(state) {
  return { token: state.token };
}

function mapDispatchToProps(dispatch) {
  return{
    sessionBtnPressed: function(sessionInfos) {
      console.log('sessionBtnPressed!');
      dispatch({type: 'sessionBtnPressed', sessionInfos})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(session);
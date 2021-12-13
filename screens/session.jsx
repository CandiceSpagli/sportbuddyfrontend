import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  Button,
  Platform,
  StyleSheet,
} from "react-native";

//Date & Time Picker
import DateTimePicker from "@react-native-community/datetimepicker";

//DropDown Button
import DropDownPicker from "react-native-dropdown-picker";

// navbar
import Navbar from "../components/buddiesScreen/navbar/NavBarPopUp";

//Icon Medaille
import { FontAwesome5 } from "@expo/vector-icons";

//MAP
import { connect } from "react-redux";
import MapView, { Marker } from "react-native-maps";

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
    console.log("create A Session from Session", value);
    console.log("datea la creation", date);
    const data = await fetch("http://10.3.11.5:3000/sessions", {
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
        style={{ marginRight: 40 }}
        name="medal"
        size={40}
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
          fontSize: 20,
          fontFamily: "Cochin",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.container}>
          <View
            style={{
              paddingHorizontal: 20,
              borderBottomWidth: 2,
              marginTop: 20,
              paddingBottom: 5,
              marginBottom: 20,
              flexDirection: "row",
            }}
          >
            <Text style={styles.textPlus}>Date</Text>
            <DateTimePicker
              style={{
                width: 100,
                justifyContent: "center",
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
              paddingHorizontal: 20,
              borderBottomWidth: 2,
              marginTop: 10,
              paddingBottom: 5,
              marginBottom: 20,
              flexDirection: "row",
            }}
          >
            <Text style={styles.textPlus}>Time</Text>
            <DateTimePicker
              style={{
                width: 100,
                justifyContent: "center",
              }}
              testID="dateTimePicker"
              value={date}
              mode={"time"}
              is24Hour={true}
              display="default"
              onChange={(event, date) => onChangeTime(event, date)}
            />
          </View>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Select Your Sport"
          />
          <View
            style={{
              paddingHorizontal: 20,
              borderBottomWidth: 2,
              marginTop: 10,
              paddingBottom: 5,
              marginBottom: 20,
              flexDirection: "row",
            }}
          >
            <Text></Text>
            <Text style={styles.textPlus}>Level</Text>
            <Text>{tabLevel}</Text>
          </View>
          <Text> </Text>
          <Text style={styles.textPlusClic}>
            Clic on map to select the place of RDV
          </Text>
          <Text> </Text>
          <MapView
            onPress={(evt) => {
              selectRDV(evt);
            }}
            style={{ flex: 1 }}
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

          <Button
            style={styles.select}
            type="clear"
            title="Create !"
            titleStyle={{ color: "black" }}
            onPress={(value) => handleSubmitSession(value)}
          ></Button>
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
    borderWidth: 2,
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 20,
    height: 600,
    width: 370,
  },
  select: {
    backgroundColor: "white",
    borderRadius: 30,
    width: 120,
    justifyContent: "center",
    marginHorizontal: 90,
    marginTop: 15,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "black",
  },
});

function mapStateToProps(state) {
  return { token: state.token };
}

export default connect(mapStateToProps, null)(session);

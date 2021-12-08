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
import DatePicker from "react-native-datepicker";
import DateTimePicker from "@react-native-community/datetimepicker";

//DropDown Button
import DropDownPicker from "react-native-dropdown-picker";

//Icon Medaille
import { FontAwesome5 } from "@expo/vector-icons";

function session() {
  // const [date, setDate] = useState(new Date());
  // console.log("datefromSESSION", date);
  const [time, setTime] = useState();
  console.log("timefromSESSION", time);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  console.log("mode set from session", mode);
  const [show, setShow] = useState(false);
  // const [date, setDate] = useState("date");
  console.log("date state from Session", date);
  // const [time, setTime] = useState("time");
  // console.log("time state from Session", time);
  const [sportChosen, setSportChosen] = useState("");
  console.log("sportChosen state from Session", sportChosen);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Course", value: "course" },
    { label: "Fitness", value: "fitness" },
    { label: "Yoga", value: "yoga" },
  ]);

  const onChangeTime = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const onPressSport = () => {
    setSportChosen();
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  // const showDatepicker = () => {
  //   showMode("date");
  // };

  const showTimepicker = () => {
    showMode("time");
  };

  // attention = &sport=${chosenSport} sport est undefined a revoir
  // attention = time undefined

  const handleSubmitSession = async () => {
    console.log("create A Session from Session", value);
    const data = await fetch("http://10.3.11.5:3000/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `date=${date}&time=${time}&level=${level}&long${long}&lat=${lat}`,
    });
  };

  return (
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
          <DatePicker
            style={{
              width: 100,
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
            // onDateChange={(date) => {
            //   setDate(date);
            // }}
            showIcon={false}
            hideText={false}
            allowFontScaling={true}
          />
        </View>
        <View
          style={
            {
              // paddingHorizontal: 20,
              // borderBottomWidth: 2,
              // marginTop: 20,
              // paddingBottom: 5,
              // marginBottom: 20,
              // flexDirection: "row",
            }
          }
        >
          {/* <Text style={styles.textPlus}>Time</Text> */}
          {/* <Button onPress={showDatepicker} title="Show date picker!" /> */}
          <Button
            style={styles.textPlus}
            onPress={showTimepicker}
            title="Show time picker!"
          />
          {show && (
            <DateTimePicker
              style={{ marginHorizontal: 150 }}
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChangeTime}
            />
          )}
        </View>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Select Your Sport"
          onPress={onPressSport}
        />
        <Text> </Text>
        <Text>
          <FontAwesome5 style={styles.icon} name="medal" color="black" />
          <FontAwesome5 style={styles.icon} name="medal" color="black" />
          <FontAwesome5 style={styles.icon} name="medal" color="black" />
        </Text>
        <Text> </Text>
        {/* map a mettre ici */}
        <Button
          style={styles.select}
          type="clear"
          title="Create !"
          titleStyle={{ color: "black" }}
          onPress={(value) => handleSubmitSession(value)}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 600,
    width: 300,
    backgroundColor: "rgba(244, 44, 4, 0.4)",
    alignContent: "center",
    borderRadius: 30,
  },
  textPlus: {
    fontSize: 30,
    marginRight: 165,
  },
  container: {
    borderWidth: 2,
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 20,
    height: 300,
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

export default session;

import React, { useState, useEffect } from "react";
import Slider from "@react-native-community/slider";

import { View, Text, TextInput, StyleSheet, Picker } from "react-native";
import { Button, Image, Card, ListItem, Divider } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";

import DatePicker from "react-native-datepicker";
import { ScrollView } from "react-native-gesture-handler";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import Geocoder from "react-native-geocoding";
Geocoder.init("AIzaSyAScpUl6RLneX5V5LB9dNvCxE6j334fR-c");

function Settings() {
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [selectedSport, setSelectedSport] = useState();
  const [currentLatitude, setCurrentLatitude] = useState(0);
  const [currentLongitude, setCurrentLongitude] = useState(0);
  const [currentAdress, setCurrentAdress] = useState("");
  const [slider, setSlider] = useState();
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [gender, setGender] = useState("Man");
  const [sports, setSports] = useState([
    { name: "Run", level: 1 },
    { name: "Fitness", level: 2 },
    { name: "Yoga", level: 1 },
  ]);
  console.log("SPORTS", sports);
  console.log("SPORTS.NAME", sports.name);
  // console.log("FIRSTNAME", firstName);
  // console.log("LASTNAME", lastName);
  console.log("GENDER", gender);

  // console.log("CURRENTLATITUDE", currentLatitude);
  // console.log("CURRENTLONGITUDE", currentLongitude);
  // console.log("CURRENT ADDRESS", currentAdress);

  // USEEFFECT
  useEffect(() => {
    async function askPermissions() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        Location.watchPositionAsync({ distanceInterval: 10 }, (location) => {
          setCurrentLatitude(location.coords.latitude);
          setCurrentLongitude(location.coords.longitude);
        });
      }
    }
    askPermissions();
  }, []);
  // GEOCODER

  Geocoder.from(currentLatitude, currentLongitude)
    .then((json) => {
      // console.log("JSON GEOCODER", json);
      var addressComponent = json.results[0].formatted_address;
      setCurrentAdress(addressComponent);

      // console.log("ADRESSE", addressComponent);
    })
    .catch((error) => console.warn(error));

  var handleSubmitContinue = async () => {
    const data = await fetch("http://10.3.11.6:3000/settings", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `lastname=${lastName}&firstname=${firstName}&dateOfBirth=${dateOfBirth}&gender=${gender}`,
    });

    const body = await data.json();

    console.log("body", body);
  };

  var buttonWTitleStyle = { color: "#F53A15" };
  var buttonWStyle = styles.buttonNonSelected;
  var buttonMTitleStyle = { color: "white" };
  var buttonMStyle = styles.buttonSelected;

  if (gender === "Woman") {
    buttonWTitleStyle = { color: "white" };
    buttonWStyle = styles.buttonSelected;
    buttonMTitleStyle = { color: "#F53A15" };
    buttonMStyle = styles.buttonNonSelected;
  } else {
    buttonWTitleStyle = { color: "#F53A15" };
    buttonWStyle = styles.buttonNonSelected;
    buttonMTitleStyle = { color: "white" };
    buttonMStyle = styles.buttonSelected;
  }

  const onValidateWoman = () => {
    setGender("Woman");
  };

  const onValidateMan = () => {
    setGender("Man");
  };

  return (
    <View>
      <ScrollView>
        <Text style={styles.step}> STEP 2/3</Text>
        <Text style={styles.text}> Nom</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          placeholder="Langoustine"
          onChangeText={(value) => setLastName(value)}
        />
        <Text style={styles.text}> Prénom</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          placeholder="de Jordanie"
          onChangeText={(value) => setFirstName(value)}
        />
        <Text style={styles.text}> Date de naissance</Text>
        <DatePicker
          customStyles={{ dateInput: { borderWidth: 0 } }}
          showIcon={false}
          style={styles.date}
          date={dateOfBirth}
          mode="date"
          placeholder="select date"
          format="DD/MM/YYYY"
          minDate="01-01-1930"
          maxDate="01-01-2030"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={(date) => {
            setDateOfBirth(date);
          }}
        />
        <Text style={styles.text}>Gender</Text>
        <View style={styles.button}>
          <Button
            titleStyle={buttonWTitleStyle}
            style={buttonWStyle}
            type="clear"
            title="Woman"
            onPress={() => onValidateWoman()}
          />

          <Button
            titleStyle={buttonMTitleStyle}
            style={buttonMStyle}
            type="clear"
            title="Man"
            onPress={() => onValidateMan()}
          />
        </View>
        <Text style={styles.level}>Votre niveau en : </Text>
        <View>
          <Text style={{ marginLeft: 40, marginVertical: 10 }}></Text>

          <View
            style={{ flexDirection: "row", marginLeft: 250, marginTop: -10 }}
          >
            <FontAwesome5 name="medal" size={24} color="#f42c04" />
            <FontAwesome5 name="medal" size={24} color="#f42c04" />
            <FontAwesome5 name="medal" size={24} color="#f42c04" />
          </View>
        </View>

        <View>
          <Text style={{ marginTop: 30, marginLeft: 20 }}>
            {" "}
            Distance max :{" "}
            <Slider
              style={{ width: 200, height: 10 }}
              minimumValue={1}
              maximumValue={15}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              value={slider}
              onValueChange={(sliderValue) => setSlider(sliderValue)}
              step={1}
            />
            {slider}
          </Text>
          <Divider style={{ marginTop: 30 }} orientation="vertical" width={5} />
        </View>
        <View>
          <Divider style={{ marginTop: 30 }} orientation="vertical" width={5} />
          <Text style={{ marginTop: 30, marginLeft: 20 }}>
            Localisation : {currentAdress}
          </Text>
          {/* <Text style={styles.text}>Localisation</Text>
          <Text style={styles.localisation}>{currentLatitude}</Text> */}
          <Divider style={{ marginTop: 30 }} orientation="vertical" width={5} />
        </View>

        <View>
          <Button
            titleStyle={{ color: "black" }}
            onPress={() => handleSubmitContinue()}
            style={styles.continue}
            type="clear"
            title="Continuer"
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    padding: 10,
    color: "grey",
    marginTop: 30,
    marginLeft: 20,
  },
  container: {
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
  },

  step: {
    marginTop: 40,
    color: "orange",
    flexDirection: "row",
    marginLeft: 300,
  },
  input: {
    height: 50,
    margin: 4,
    borderWidth: 0.5,
    padding: 15,
    borderRadius: 15,
    marginLeft: 30,
    marginRight: 30,
    borderColor: "rgba(244, 44, 4, 0.4)",
  },
  date: {
    height: 50,
    width: 310,
    borderWidth: 0.5,
    borderRadius: 15,
    marginLeft: 30,
    marginRight: 30,
    borderColor: "rgba(244, 44, 4, 0.4)",
  },
  button: {
    marginTop: 10,
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
  },

  buttonSelected: {
    color: "white",
    backgroundColor: "#F53A15",
    borderWidth: 0.5,
    borderRadius: 30,
    height: 45,
    width: 100,
    borderColor: "rgba(244, 44, 4, 0.4)",
  },
  buttonNonSelected: {
    color: "white",
    // backgroundColor: "#F53A15",
    borderWidth: 0.5,
    borderRadius: 30,
    height: 45,
    width: 100,
    marginLeft: 15,
    borderColor: "rgba(244, 44, 4, 0.4)",
  },

  level: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 50,
    marginTop: 55,
    padding: 10,
  },
  fitness: {
    color: "white",
    borderColor: "rgba(244, 44, 4, 0.4)",
    borderWidth: 0.5,
    borderRadius: 30,
  },
  picker: {
    height: 100,
    width: 100,
    marginBottom: 100,
    marginTop: -120,
    marginLeft: 250,
  },

  card: {
    height: 370,
    width: 300,
    backgroundColor: "rgba(244, 44, 4, 0.4)",
    alignContent: "center",
    borderRadius: 30,
    marginLeft: 35,
  },
  image: {
    height: 180,
    width: 180,
    marginLeft: 45,
    marginTop: 30,
  },
  select: {
    backgroundColor: "white",
    borderRadius: 30,
    width: 160,
    marginLeft: 70,
    marginTop: 30,
  },
  rond: {
    alignItems: "center",
    flex: 1,
    height: 15,
    width: 15,
    borderRadius: 50,
  },
  localisation: {
    flexDirection: "row",
    textAlign: "center",
  },
  continue: {
    // backgroundColor: "white",
    borderWidth: 0.5,
    borderRadius: 30,
    height: 45,
    width: 100,
    marginLeft: 130,
    borderColor: "rgba(244, 44, 4, 0.4)",
    marginTop: 20,
  },
});

export default Settings;

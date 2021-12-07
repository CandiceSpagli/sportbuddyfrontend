import React, { useState, useEffect } from "react";

import { View, Text, TextInput, StyleSheet, Picker } from "react-native";
import { Button, Image, Card, ListItem, Divider } from "react-native-elements";

import DatePicker from "react-native-datepicker";
import { ScrollView } from "react-native-gesture-handler";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import Geocoder from "react-native-geocoding";
Geocoder.init("AIzaSyAScpUl6RLneX5V5LB9dNvCxE6j334fR-c");

function Settings() {
  const [date, setDate] = useState(new Date());
  const [selectedSport, setSelectedSport] = useState();
  const [currentLatitude, setCurrentLatitude] = useState(0);
  const [currentLongitude, setCurrentLongitude] = useState(0);
  console.log("CURRENTLATITUDE", currentLatitude);
  useEffect(() => {
    async function askPermissions() {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === "granted") {
        Location.watchPositionAsync({ distanceInterval: 10 }, (location) => {
          // setCurrentLatitude(location.coords.latitude);
          // setCurrentLongitude(location.coords.longitude);
          // console.log("LOCATION", location);
          // console.log("LONG", location.coords.longitude);
        });
      }
      setCurrentLatitude(location.coords.latitude);
      setCurrentLongitude(location.coords.longitude);
    }
    askPermissions();
  }, []);

  Geocoder.from(41.89, 12.49).then(
    (json) => {
      var addressComponent = json.results[0].address_components[0];
      alert(address_components.long_name);
      console.log("ADRESS COMPONENT", addressComponent);
    },
    (error) => {
      alert(error);
    }
  );

  return (
    <View>
      <ScrollView>
        <Text style={styles.step}> STEP 2/3</Text>
        <Text style={styles.text}> Enter your name</Text>
        <TextInput style={styles.input} value={""} />
        <Text style={styles.text}> Date of birth</Text>
        <DatePicker
          customStyles={{ dateInput: { borderWidth: 0 } }}
          showIcon={false}
          style={styles.date}
          date={date}
          mode="date"
          placeholder="select date"
          format="DD/MM/YYYY"
          minDate="01-01-1930"
          maxDate="01-01-2030"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={(date) => {
            setDate(date);
          }}
        />
        <Text style={styles.text}>Gender</Text>
        <View style={styles.button}>
          <Button
            titleStyle={{ color: "white" }}
            style={styles.woman}
            type="clear"
            title="Woman"
          />
          <Button
            titleStyle={{ color: "#F53A15" }}
            style={styles.man}
            type="clear"
            title="Man"
          />
        </View>
        <Text style={styles.level}>Votre niveau en : </Text>
        <Picker
          style={styles.picker}
          selectedValue={selectedSport}
          onValueChange={(itemValue, itemIndex) => setSelectedSport(itemValue)}
        >
          <Picker.Item label="Fitness" value="Fitness" />
          <Picker.Item label="Run" value="Run" />
          <Picker.Item label="Yoga" value="Yoga" />
        </Picker>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.card}>
            <Image
              source={require("../img/staticImg/entrainementfit.png")}
              resizeMode="cover"
              style={styles.image}
            ></Image>
            <Text
              style={{
                fontSize: 30,
                fontFamily: "Cochin",
                marginLeft: 85,
                marginTop: 15,
              }}
            >
              Débutant
            </Text>
            <Text
              style={{
                fontFamily: "Cochin",
                fontSize: 15,
                textAlign: "center",
                marginLeft: 3,
              }}
            >
              Vous vous entrainez rarement ou jamais
            </Text>
            <Button
              style={styles.select}
              type="clear"
              title="Selectionner"
              titleStyle={{ color: "black" }}
            ></Button>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../img/staticImg/entrainementfit.png")}
              resizeMode="cover"
              style={styles.image}
            ></Image>
            <Text
              style={{
                fontSize: 30,
                fontFamily: "Cochin",
                marginLeft: 85,
                marginTop: 15,
              }}
            >
              Intermédiaire
            </Text>
            <Text
              style={{
                fontFamily: "Cochin",
                fontSize: 15,
                textAlign: "center",
                marginLeft: 3,
              }}
            >
              Vous vous entrainez 2 fois par semaine
            </Text>
            <Button
              style={styles.select}
              type="clear"
              title="Selectionner"
              titleStyle={{ color: "black" }}
            ></Button>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../img/staticImg/entrainementfit.png")}
              resizeMode="cover"
              style={styles.image}
            ></Image>
            <Text
              style={{
                fontSize: 30,
                fontFamily: "Cochin",
                marginLeft: 100,
                marginTop: 15,
                textAlign: "Center",
              }}
            >
              Expert
            </Text>
            <Text
              style={{
                fontFamily: "Cochin",
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Vous êtes un vrai athlète!
            </Text>
            <Button
              style={styles.select}
              type="clear"
              title="Selectionner"
              titleStyle={{ color: "black" }}
            ></Button>
          </View>
        </ScrollView>
        <View>
          <Divider style={{ marginTop: 30 }} orientation="vertical" width={5} />
          <Text style={{ marginTop: 30, marginLeft: 20 }}>Localisation : </Text>
          {/* <Text style={styles.text}>Localisation</Text>
          <Text style={styles.localisation}>{currentLatitude}</Text> */}
          <Divider style={{ marginTop: 30 }} orientation="vertical" width={5} />
        </View>
        <View>
          <Text style={{ marginTop: 30, marginLeft: 20 }}>
            {" "}
            Distance max :{" "}
          </Text>
          <Divider style={{ marginTop: 30 }} orientation="vertical" width={5} />
        </View>
        <View>
          <Button
            titleStyle={{ color: "black" }}
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

  woman: {
    color: "white",
    backgroundColor: "#F53A15",
    borderWidth: 0.5,
    borderRadius: 30,
    height: 45,
    width: 100,
    borderColor: "rgba(244, 44, 4, 0.4)",
  },
  man: {
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
    marginTop: 15,
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

import React, { useState, useEffect } from "react";
import Slider from "@react-native-community/slider";

import { View, Text, TextInput, StyleSheet, Picker, Modal } from "react-native";
import { Button, Image, Card, ListItem, Divider } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
import { connect } from "react-redux";

import DatePicker from "react-native-datepicker";
import { ScrollView } from "react-native-gesture-handler";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import Geocoder from "react-native-geocoding";
import DropDownPicker from "react-native-dropdown-picker";
import SportsSettingsModal from "../components/buddiesScreen/SportsSettingsModal";
Geocoder.init("AIzaSyAScpUl6RLneX5V5LB9dNvCxE6j334fR-c");
import { BlurView } from "expo-blur";
import { useFonts } from "expo-font";
import token from "../reducers/token";

// // const onSettingsPress = () => {
// //   // console.log('hey');
// //   props.cardPressed(sports)
// //   // console.log('users Array !!', user);
// }
function Settings(props) {
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [selectedSport, setSelectedSport] = useState();
  const [currentLatitude, setCurrentLatitude] = useState(0);
  const [currentLongitude, setCurrentLongitude] = useState(0);
  const [currentAdress, setCurrentAdress] = useState("");
  const [isPlusClicked, setIsPlusClicked] = useState(false);
  const [slider, setSlider] = useState();
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [gender, setGender] = useState("Man");
  const [sports, setSports] = useState([]);

  const [currentSport, setCurrentSport] = useState({
    name: "Yoga",
    level: 2,
  });

  console.log("SPORT", sports);

  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("CURRENT SPORT", currentSport);

  const defaultSports = ["Course", "Fitness", "Yoga"];
  // console.log("SPORTS", sports);

  // console.log("FIRSTNAME", firstName);
  // console.log("LASTNAME", lastName);
  // console.log("GENDER", gender);

  // console.log("CURRENTLATITUDE", currentLatitude);
  // console.log("CURRENTLONGITUDE", currentLongitude);
  // console.log("CURRENT ADDRESS", currentAdress);

  // USEEFFECT
  useEffect(() => {
    props.navigation.navigate("Buddies");
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
    const data = await fetch("http://10.3.11.5:3000/settings", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `token=${props.token}&lastname=${lastName}&firstname=${firstName}&gender=${gender}`,
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

  const onPressModal = () => {
    setIsModalOpen(true);
  };

  const onValuePicker = (itemValue, itemIndex) => {
    // console.log("ITEM VALUE", itemValue);
    // console.log("ITEM INDEX", itemIndex);
    setCurrentSport({
      name: itemValue,
      level: currentSport.level,
    });
  };

  const onSelectCard = (level) => {
    // console.log("CLICK");
    // console.log("LEVEL", level);
    setIsModalOpen(false);
    setCurrentSport({
      name: currentSport.name,
      level: currentSport.level,
    });
    setSports([
      ...sports,
      {
        name: currentSport.name,
        level: level,
      },
    ]);
  };
  const [loaded] = useFonts({
    bohemianSoul: require("../assets/fonts/bohemianSoul.otf"),
    belledeMai: require("../assets/fonts/BelledeMai4.0-Heavy.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ backgroundColor: "white" }}>
      <Modal animationType="fade" transparent={true} visible={isModalOpen}>
        <BlurView style={styles.blur} tint="light" intensity={80}>
          <View style={styles.box}>
            <View>
              <Picker
                style={styles.picker}
                selectedValue={currentSport.name}
                // style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) =>
                  onValuePicker(itemValue, itemIndex)
                }
              >
                {defaultSports.map((sport, index) => {
                  // console.log("SPORTS INFO BIS", sportsinfo);

                  return (
                    <Picker.Item key={index} label={sport} value={sport} />
                  );
                })}
              </Picker>
            </View>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
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
                  onPress={() => onSelectCard(1)}
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
                  Vous vous entrainez rarement ou jamais
                </Text>
                <Button
                  style={styles.select}
                  type="clear"
                  title="Selectionner"
                  titleStyle={{ color: "black" }}
                  onPress={() => onSelectCard(2)}
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
                  Expert
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
                  onPress={() => onSelectCard(3)}
                ></Button>
              </View>
            </ScrollView>
          </View>
        </BlurView>
      </Modal>
      <ScrollView>
        <Text style={styles.step}> STEP 2/3</Text>
        <Text style={{ fontFamily: "bohemianSoul", fontSize: 40 }}>
          {" "}
          Paramètre
        </Text>

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
        {sports.length > 0 && (
          <Text style={styles.level}>Votre niveau en : </Text>
        )}
        <View style={{ marginLeft: 40, marginVertical: 10 }}>
          {sports.map((sportsinfo, index) => {
            console.log("SPORTSINFO", sportsinfo);
            const tabLevel = [];
            for (var i = 0; i < 3; i++) {
              let color = "#DCDCDC";
              if (i < sportsinfo.level) {
                color = "#f42c04";
              }
              let count = i + 1;
              tabLevel.push(
                <FontAwesome5
                  key={count}
                  style={{ marginRight: 15 }}
                  name="medal"
                  size={25}
                  color={color}
                />
              );
            }

            return (
              <View>
                <View>
                  <Text style={styles.sportsetting}>{sportsinfo.name}</Text>
                  <Text>{tabLevel}</Text>
                </View>
              </View>
            );
          })}
        </View>
        <View style={{ alignItems: "center" }}>
          <Button
            style={{
              backgroundColor: "#f42c04",
              width: 200,
              borderRadius: 30,
              marginBottom: 30,
              marginTop: 30,
            }}
            type="clear"
            titleStyle={{ color: "white" }}
            title="Ajouter un sport"
            onPress={() => onPressModal()}
          />
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
    marginTop: 50,
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
    marginLeft: 15,
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
    borderColor: "#f42c04",
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
    borderColor: "#f42c04",
    borderWidth: 0.5,
    borderRadius: 30,
  },
  picker: {
    width: 100,
    marginBottom: 100,
  },

  card: {
    // height: 300,
    width: 300,
    backgroundColor: "rgba(244, 44, 4, 0.4)",
    alignContent: "center",
    borderRadius: 30,
    marginLeft: 4,
    marginTop: 0,
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
  sportsetting: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 20,
  },
  box: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "white",
    borderRadius: 60,
    // height: 720,
    width: 350,
    shadowColor: "black",
    shadowRadius: 12,
    shadowOpacity: 0.1,
    alignItems: "center",
    paddingBottom: 50,
    paddingRight: 30,
    paddingLeft: 30,
  },
  blur: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});

function mapStateToProps(state) {
  return { token: state.token };
}

export default connect(mapStateToProps, null)(Settings);

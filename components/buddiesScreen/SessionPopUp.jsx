import React, { useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Button } from "react-native-elements";

// redux
import { connect } from "react-redux";
// expo blur
import { BlurView } from "expo-blur";
// mapView
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

// icons
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

function SessionPopUp(props) {
  const exitPopUp = () => {
    console.log("exitPopUp");
  };

  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={props.visible}>
        <BlurView style={styles.container} tint="light" intensity={80}>
          <View style={styles.box}>
            {/* <View style={styles.userSessionContent}>
              <View style={styles.contentPart}>
                <Text style={styles.contentTitle}>Date</Text>
                <Text style={styles.userContent}>06/12/21</Text>
              </View>
              <View style={styles.contentPart}>
                <Text style={styles.contentTitle}>Heure</Text>
                <Text style={styles.userContent}>06/12/21</Text>
              </View>
              <View style={styles.contentPart}>
                <Text style={styles.contentTitle}>Sport</Text>
                <Text style={styles.userContent}>06/12/21</Text>
              </View>
              <View style={styles.levelPart}>
                <FontAwesome5 name="medal" size={40} color="black" />
                <FontAwesome5 name="medal" size={40} color="black" />
                <FontAwesome5 name="medal" size={40} color="black" />
              </View>
            </View>
            <View style={styles.map}>
              <MapView
                style={{
                  borderRadius: 60,
                  height: 200,
                  width: 300,
                }}
                mapType = 'mutedStandard'
                initialRegion={{
                  latitude: 48.866667,
                  longitude: 2.333333,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }}
                minZoomLevel={17}
              >
                <Marker
                  coordinate={{latitude: 48.866667, longitude: 2.333333}}
                  title='Av. des Guelfes, 98000 Monaco'
                />
              </MapView>
            </View>
            <View style={styles.locaPart}>
              <Entypo name="location-pin" size={50} color="#f42c04" />
              <Text style={styles.locaText}>Av. des Guelfes, 98000 Monaco</Text>
            </View>
            <Button
              style={styles.buddiesBtn} type="clear" title="Cr??er !"
              titleStyle={{
                fontSize: 30,
                color: 'white'
              }}
            /> */}
          </View>
          <TouchableOpacity onPress={() => exitPopUp()}>
            <Text style={styles.closeBtn}>Fermer</Text>
          </TouchableOpacity>
        </BlurView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 20
  },
  box: {
    backgroundColor: "white",
    borderRadius: 60,
    height: 720,
    width: 350,
    shadowColor: "black",
    shadowRadius: 12,
    shadowOpacity: 0.1,
    alignItems: "center",
  },
  profil: {
    marginTop: -30,
    height: 175,
    width: 175,
    borderRadius: 100,
  },
  closeBtn: {
    fontSize: 20,
    justifyContent: "center",
    marginTop: 20,
  },
  firstname: {
    fontSize: 30,
    marginTop: -50,
    backgroundColor: "black",
    color: "white",
    paddingTop: 3,
    paddingLeft: 15,
    paddingRight: 15,
  },
  lastname: {
    fontSize: 30,
    backgroundColor: "black",
    color: "white",
    paddingBottom: 6,
    paddingLeft: 15,
    paddingRight: 15,
  },
  userSessionContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: 20,
    marginTop: 5,
    marginBottom: 10,
  },
  contentPart: {
    // backgroundColor: 'red',
    justifyContent: "space-between",
    margin: 10,
  },
  levelPart: {
    flexDirection: "row",
    // backgroundColor: 'red',
    margin: 10,
    alignItems: "center",
  },
  contentTitle: {
    fontSize: 30,
  },
  userContent: {
    fontSize: 40,
  },
  map: {
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 60,
    height: 200,
    width: 300,
    shadowColor: "black",
    shadowRadius: 12,
    shadowOpacity: 0.2,
    alignItems: "center",
  },
  locaPart: {
    flexDirection: "row",
    marginLeft: 60,
    marginRight: 60,
    alignItems: "center",
    marginTop: 10,
  },
  locaText: {
    fontSize: 30,
  },
  buddiesBtn: {
    backgroundColor: "#f42c04",
    borderRadius: 50,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
});

export default SessionPopUp;

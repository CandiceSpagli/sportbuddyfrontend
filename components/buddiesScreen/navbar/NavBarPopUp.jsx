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

// icons
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function navBar(props) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const buttonClicked = () => {
    setIsButtonClicked(isButtonClicked === false ? true : false);
  };

  const buddiesPressed = () => {
    props.navigation.navigate("Buddies");
    setIsButtonClicked(false);
  };
  const sessionPressed = () => {
    props.navigation.navigate("Session");
    setIsButtonClicked(false);
  };
  const journalPressed = () => {
    // props.navigation.navigate("Journal");
    setIsButtonClicked(false);
  };
  const profilPressed = () => {
    props.navigation.navigate("Profil");
    setIsButtonClicked(false);
  };

  const navBarPopUp = () => {
    return (
      <>
        <Modal animationType="fade" transparent={true} visible={true}>
          <BlurView style={styles.blur} tint="light" intensity={80}>
            <View style={styles.navPlacement}>
              <View style={styles.navbarContainer}></View>
              <View style={styles.btnTextsGroup}>
                <Button
                  titleStyle={styles.navTexts}
                  title="Chercher des buddies"
                  type="clear"
                  onPress={() => buddiesPressed()}
                />
                <Button
                  titleStyle={styles.navSession}
                  title="Créer une session"
                  type="clear"
                  onPress={() => sessionPressed()}
                />
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 12,
                    marginTop: 6,
                    marginBottom: 6,

                  }}
                  onPress={() => journalPressed()}
                >
                  <Text style={styles.navTexts}>Journal</Text>
                  <FontAwesome
                    style={{
                      position: "absolute",
                      marginLeft: 97,
                      top: 15,
                    }}
                    name="circle"
                    size={10}
                    color="#f42c04"
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <MaterialIcons
                      style={{ marginLeft: 20, marginRight: 3 }}
                      name="timer"
                      size={22}
                      color="black"
                    />
                    <Text>Candice Spagli</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    margin: 12,
                  }}
                  onPress={() => profilPressed()}
                >
                  <Text style={styles.navTexts}>Mon Profil</Text>
                  <Image
                    style={styles.profil}
                    source={require("../../../img/staticImg/user.jpg")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.navBtn}
                type="clear"
                onPress={() => buttonClicked()}
              >
                <Image
                  style={{
                    height: 50,
                    width: 50,
                  }}
                  source={require("../../../img/staticImg/icons/squid.png")}
                />
              </TouchableOpacity>
            </View>
          </BlurView>
        </Modal>
      </>
    );
  };

  return (
    <View style={styles.container}>
      {isButtonClicked && navBarPopUp()}
      <TouchableOpacity
        style={styles.navBtn}
        type="clear"
        onPress={() => buttonClicked()}
      >
        <Image
          style={{
            height: 50,
            width: 50,
          }}
          source={require("../../../img/staticImg/icons/squid.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  blur: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    position: "absolute",
    margin: 20,
    bottom: 0,
    right: 0,
  },
  tempContainer: {
    position: "absolute",
    margin: 20,
    bottom: 80,
    right: 0,
  },
  navPlacement: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navbarContainer: {
    // marginTop: 180,
    width: 350,
    height: 350,
    opacity: 0.5,
    backgroundColor: "white",
    borderRadius: 60,
    shadowColor: "black",
    shadowRadius: 12,
    shadowOpacity: 0.1,
    // justifyContent: "center",
    // alignItems: "center",
    position: "absolute",
    top: 340,
  },
  navBtn: {
    backgroundColor: "#f42c04",
    borderRadius: 50,
    height: 65,
    width: 65,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
    margin: 10,
  },
  btnTextsGroup: {
    marginTop: 140,
    alignItems: "center",
  },
  navTexts: {
    fontSize: 30,
    margin: 12,
    color: "black",
  },
  navSession: {
    fontSize: 30,
    margin: 12,
    color: "#f42c04",
  },
  profil: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
});

export default navBar;

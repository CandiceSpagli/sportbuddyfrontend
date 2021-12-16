 import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

// useFonts
import { useFonts } from "expo-font";
import { Button } from "react-native-elements";

// navbar
import Navbar from "../components/buddiesScreen/navbar/NavBarPopUp";
// historyComp
import HistoryComp from "../components/journalHistorique/HistoryComp";
// invitationsComp
import InvitationsComp from "../components/journalInvitations/InvitationsComp";

function journal(props) {
  const [userHistorique, setUserHistorique] = useState([]);
  // console.log("userHistorique FROM JOURNAL", userHistorique);
  console.log("userHistorique FROM JOURNAL", userHistorique.length);

  const [isHistoriqueBtnPressed, setIsHistoriqueBtnPressed] = useState(
    styles.mainBtnPressed
  );
  const [isInvitationBtnPressed, setIsInvitationBtnPressed] = useState(
    styles.mainBtn
  );

  const [historiquePressed, setHistoriquePressed] = useState(true);
  const [loaded] = useFonts({
    bohemianSoul: require("../assets/fonts/bohemianSoul.otf"),
  });

  useEffect(() => {
    async function historiqueSessions() {
      console.log("props.token from Jounal", props.token);
      const rawResponse = await fetch(
        `http://10.3.11.5:3000/journal?token=${props.token}`
      );
      const response = await rawResponse.json();
      console.log("response", response);
      setUserHistorique(response.userHistorique);
    }
    historiqueSessions();
  }, []);

  if (!loaded) {
    return null;
  }

  const historiqueBtnPressed = () => {
    setIsHistoriqueBtnPressed(styles.mainBtnPressed);
    setHistoriquePressed(true);

    // invitationPart
    setIsInvitationBtnPressed(styles.mainBtn);
  };

  const invitationBtnPressed = () => {
    setIsInvitationBtnPressed(styles.mainBtnPressed);

    // historiquePart
    setIsHistoriqueBtnPressed(styles.mainBtn);
    setHistoriquePressed(false);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{ alignItems: "center", paddingTop: 35 }}>
          <Text style={styles.title}>Journal</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Button
            style={isHistoriqueBtnPressed}
            titleStyle={{
              color: "black",
              fontSize: 30,
            }}
            type="clear"
            title="Historique"
            onPress={() => historiqueBtnPressed()}
          />
          <Button
            style={isInvitationBtnPressed}
            titleStyle={{
              color: "black",
              fontSize: 30,
            }}
            type="clear"
            title="Invitations"
            onPress={() => invitationBtnPressed()}
          />
        </View>
        {historiquePressed && <HistoryComp users={userHistorique} />}
        {!historiquePressed && (
          <InvitationsComp navigation={props.navigation} />
        )}
        <Navbar navigation={props.navigation} />
      </View>
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
  mainBtn: {
    paddingLeft: 25,
    paddingRight: 25,
    // backgroundColor: "red",
  },
  mainBtnPressed: {
    paddingLeft: 25,
    paddingRight: 25,
    borderBottomWidth: 10,
  },
});

function mapStateToProps(state) {
  return { token: state.token };
}

export default connect(mapStateToProps, null)(journal);

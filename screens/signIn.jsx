import React, { useState } from "react";
import {
  View,
  TextInput,
  Link,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";

import { Button } from "react-native-elements";

// navbar
import Navbar from "../components/buddiesScreen/navbar/NavBarPopUp";
import { useFonts } from "expo-font";

function signIn(props) {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  //   const [userExists, setUserExists] = useState(false);
  // console.log("signInEmail", signInEmail);
  const [userExists, setUserExists] = useState(false);
  // console.log("userExists", userExists);

  var handleSubmitSignin = async () => {
    console.log("handleSubmitSignin", handleSubmitSignin);
    console.log("signInEmail", signInEmail);
    // const data = await fetch("http://192.168.1.13:3000/sign-in", {
    // const data = await fetch("http://10.3.11.5:3000/sign-in", {
    const data = await fetch("http://10.3.11.6:3000/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `email=${signInEmail}&password=${signInPassword}`,
    });

    const body = await data.json();
    console.log("body", body);

    if (body.result === true) {
      props.addToken(body.token);
      setUserExists(true);
      props.navigation.navigate("Buddies");
    } else {
      //   setUserExists(false);
      //   setErrorsSignup(body.error);
      props.navigation.navigate("SignUp");
    }
  };

  const onChangeEmail = (value) => {
    console.log("OnChangeEmailvalue", value);
    setSignInEmail(value);
  };

  const OnChangePassword = (value) => {
    console.log("OnChangePasswordvalue", value);
    setSignInPassword(value);
  };

  const goToSignUp = () => {
    props.navigation.navigate("SignUp");
  };
  const [loaded] = useFonts({
    bohemianSoul: require("../assets/fonts/bohemianSoul.otf"),
    belledeMai: require("../assets/fonts/BelledeMai4.0-Heavy.otf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <>
      <Image
        style={{ position: "absolute", weight: "100%", height: "100%" }}
        source={require("../img/staticImg/degradetfour.jpg")}
        resizeMode="cover"
      ></Image>
      <View style={{ alignItems: "center" }}>
        <View>
          <Text
            style={{ fontFamily: "bohemianSoul", fontSize: 70, marginTop: 50 }}
          >
            {" "}
            Sign-In{" "}
          </Text>
        </View>
        <View style={{ padding: 40 }}>
          <Text
            style={{
              color: "black",
              padding: 10,
            }}
          >
            Adresse email
          </Text>

          <TextInput
            style={styles.inputone}
            onChangeText={(value) => onChangeEmail(value)}
            className="Login-input"
            placeholder="email"
            value={signInEmail}
          />
        </View>
        <View style={{ padding: 40 }}>
          <Text
            style={{
              padding: 10,
              color: "black",
            }}
          >
            Mot de passe
          </Text>

          <TextInput
            style={styles.inputtwo}
            onChangeText={(value) => OnChangePassword(value)}
            className="Login-input"
            placeholder="password"
            value={signInPassword}
            secureTextEntry={true}
          />
        </View>

        {/* {tabErrorsSignin} */}
        <View style={{ marginTop: 40, alignItems: "center" }}>
          {/* <Button
            onPress={() => handleSubmitSignin()}
            style={{ width: 80 }}
            type="clear"
            title="SIGN-IN"
          ></Button> */}

          <Button
            style={styles.sportBtn}
            titleStyle={{
              fontSize: 30,
              color: "black",
            }}
            type="clear"
            title="Continuer"
            onPress={() => handleSubmitSignin()}
          />
          <Text style={{ margin: 5, paddingTop: 35 }}>
            {" "}
            Vous n'avez pas de compte?
          </Text>

          <Button
            onPress={() => goToSignUp()}
            titleStyle={{
              color: "black",
              textDecorationLine: "underline",
              fontSize: 13,
            }}
            type="clear"
            title="Inscrivez-vous"
          ></Button>
        </View>
      </View>
      {/* <Navbar navigation={props.navigation} /> */}
    </>
  );
}

const styles = StyleSheet.create({
  inputone: {
    height: 50,
    width: 280,
    borderWidth: 2,
    paddingLeft: 20,
    borderRadius: 60,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  sportBtn: {
    width: 280,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  inputtwo: {
    height: 50,
    width: 280,
    paddingLeft: 20,
    marginBottom: 60,
    backgroundColor: "rgba(255, 255, 255, 0.3)",

    borderWidth: 2,

    borderRadius: 60,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    addToken: function (token) {
      dispatch({ type: "addToken", token: token });
    },
  };
}

export default connect(null, mapDispatchToProps)(signIn);

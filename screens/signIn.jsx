import React, { useState } from "react";
import {
  View,
  TextInput,
  Link,
  Button,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";

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
    const data = await fetch("http://10.3.11.5:3000/sign-in", {
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
        style={{ position: "absolute", height: "100%" }}
        source={require("../img/staticImg/degrade.jpg")}
        resizeMode="cover"
      ></Image>
      <View>
        <View>
          <Text
            style={{ fontFamily: "bohemianSoul", fontSize: 70, marginTop: 80 }}
          >
            {" "}
            Sign-In{" "}
          </Text>
        </View>

        <TextInput
          style={styles.inputone}
          onChangeText={(value) => onChangeEmail(value)}
          className="Login-input"
          placeholder="email"
          value={signInEmail}
        />
        <View>
          <Text
            style={{
              marginTop: -100,
              marginLeft: 10,
              color: "grey",
              marginLeft: 50,
            }}
          >
            {" "}
            Adresse email{" "}
          </Text>
        </View>

        <TextInput
          style={styles.inputtwo}
          onChangeText={(value) => OnChangePassword(value)}
          className="Login-input"
          placeholder="password"
          value={signInPassword}
          secureTextEntry={true}
        />
        <Text
          style={{
            marginLeft: 10,
            color: "grey",
            marginTop: -90,
            marginLeft: 50,
          }}
        >
          {" "}
          Mot de passe{" "}
        </Text>

        {/* {tabErrorsSignin} */}
        <View style={{ marginTop: 150 }}>
          <Button
            style={{ marginTop: 50 }}
            onPress={() => handleSubmitSignin()}
            style={{ width: 80 }}
            type="primary"
            title="SIGN-IN"
          ></Button>

          <Button
            style={styles.input}
            onPress={() => goToSignUp()}
            style={{ width: 80 }}
            type="primary"
            title="PRESS TO CREATE AN ACCOUNT?"
          ></Button>
        </View>
      </View>
      <Navbar navigation={props.navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  inputone: {
    marginTop: 40,
    height: 50,
    width: 280,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 60,
    marginTop: 260,
    marginLeft: 50,
  },
  inputtwo: {
    marginTop: 40,
    height: 50,
    width: 280,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 60,
    marginLeft: 50,
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

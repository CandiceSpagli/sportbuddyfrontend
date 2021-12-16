import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

function signUp(props) {
  const [firstnameFromFront, setFirstnameFromFront] = useState("");
  const [lastnameFromFront, setLastnameFromFront] = useState("");

  const [emailFromFront, setEmailFromFront] = useState("");
  const [passwordFromFront, setPasswordFromFront] = useState("");

  const [userExists, setUserExists] = useState(false);
  console.log("userExists", userExists);
  const [listErrorsSignup, setErrorsSignup] = useState([]);

  var handleSubmitSignup = async () => {
    console.log("handleSubmitSignup", handleSubmitSignup);
    console.log("firstnameFromFront", firstnameFromFront);
    console.log("lastnameFromFront", lastnameFromFront);
    console.log("emailFromFront", emailFromFront);
    console.log("passwordFromFront", passwordFromFront);

    // const data = await fetch("http://192.168.1.13:3000/sign-up", {
    // const data = await fetch("http://10.3.11.5:3000/sign-up", {
    // const data = await fetch("http://10.3.11.5:3000/sign-up", {
    // const data = await fetch("http://10.3.11.9:3000/sign-up", {
    const data = await fetch("http://10.3.11.6:3000/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `firstname=${firstnameFromFront}&lastname=${lastnameFromFront}&email=${emailFromFront}&password=${passwordFromFront}`,
    });

    const body = await data.json();
    const token = body.token;
    console.log("body", body);
    console.log("body.token", token);

    if (body.result === true) {
      setUserExists(true);
      props.navigation.navigate("Settings");
    } else {
      setErrorsSignup(body.error);
    }

    // else {
    //   var tabErrorsSignup = listErrorsSignup.map((error, i) => {
    //     return <p>{error}</p>;
    //   });
    // }
  };

  const goToSignIn = () => {
    props.navigation.navigate("SignIn");
  };

  return (
    <>
      <Image
        style={{ position: "absolute", weight: "100%", height: "100%" }}
        source={require("../img/staticImg/degrade_reverse.jpg")}
        resizeMode="cover"
      ></Image>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "bohemianSoul",
            fontSize: 70,
            marginTop: 50,
            marginLeft: 24,
          }}
        >
          Sign-Up
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setFirstnameFromFront(value)}
          placeholder="firstname"
          value={firstnameFromFront}
        />
        <TextInput
          style={styles.inputone}
          onChangeText={(value) => setLastnameFromFront(value)}
          placeholder="lastname"
          value={lastnameFromFront}
        />
        <TextInput
          style={styles.inputTwo}
          onChangeText={(value) => setEmailFromFront(value)}
          placeholder="email"
          value={emailFromFront}
        />
        <TextInput
          style={styles.inputThree}
          onChangeText={(value) => setPasswordFromFront(value)}
          placeholder="password"
          value={passwordFromFront}
          secureTextEntry={true}
        />
        {/* {tabErrorsSignup} */}

        <Button
          style={styles.sportBtn}
          titleStyle={{
            fontSize: 30,
            color: "black",
          }}
          onPress={() => handleSubmitSignup()}
          type="clear"
          title="Continuer"
        ></Button>
        <Text style={{ margin: 5, paddingTop: 35 }}>
          Vous avez déjà un compte?
        </Text>

        <Button
          style={styles.sportBtn}
          titleStyle={{
            color: "black",
            textDecorationLine: "underline",
            fontSize: 13,
          }}
          onPress={() => goToSignIn()}
          style={{}}
          type="clear"
          title="Connectez-vous"
        ></Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 280,
    borderWidth: 2,
    paddingLeft: 20,
    borderRadius: 60,
    marginBottom: 40,
    marginTop: 90,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },

  sportBtn: {
    width: 280,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  inputone: {
    height: 50,
    width: 280,
    borderWidth: 2,
    paddingLeft: 20,
    borderRadius: 60,
    marginBottom: 40,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  inputTwo: {
    height: 50,
    width: 280,
    paddingLeft: 20,
    marginBottom: 40,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderWidth: 2,
    borderRadius: 60,
  },
  inputThree: {
    height: 50,
    width: 280,
    borderWidth: 2,
    paddingLeft: 20,
    borderRadius: 60,
    marginBottom: 40,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  inputFor: {
    height: 50,
    width: 280,
    borderWidth: 2,
    paddingLeft: 20,
    borderRadius: 60,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  inputFive: {
    height: 50,
    width: 280,
    borderWidth: 2,
    paddingLeft: 20,
    borderRadius: 60,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
});

function mapDispatchToProps(dispatch) {
  return {
    addToken: function (token) {
      dispatch({ type: "addToken", token: token });
    },
  };
}

export default connect(null, mapDispatchToProps)(signUp);

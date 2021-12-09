import React, { useState } from "react";
import { View, TextInput, Link, Button, StyleSheet } from "react-native";
import {connect} from 'react-redux';

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
    const data = await fetch("http://10.3.11.5:3000/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `email=${signInEmail}&password=${signInPassword}`,
    });

    const body = await data.json();
    console.log("body", body);

    if (body.result === true) {
      //   props.addToken(body.token);
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

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(value) => onChangeEmail(value)}
        className="Login-input"
        placeholder="email"
        value={signInEmail}
      />

      <TextInput
        style={styles.input}
        onChangeText={(value) => OnChangePassword(value)}
        className="Login-input"
        placeholder="password"
        value={signInPassword}
      />

      {/* {tabErrorsSignin} */}

      <Button
        style={styles.input}
        onPress={() => handleSubmitSignin()}
        style={{ width: "80px" }}
        type="primary"
        title="SIGN-IN"
      ></Button>

      <Button
        style={styles.input}
        onPress={() => goToSignUp()}
        style={{ width: "80px" }}
        type="primary"
        title="PRESS TO CREATE AN ACCOUNT?"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 40,
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 60,
  },
});

function mapDispatchToProps(dispatch){
  return {
    addToken: function(token){
      dispatch({type: 'addToken', token: token})
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SignIn)


export default signIn;

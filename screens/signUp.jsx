import React, { useState } from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";

function signUp(props) {
  const [usernameFromFront, setUsernameFromFront] = useState("");
  const [emailFromFront, setEmailFromFront] = useState("");
  const [passwordFromFront, setPasswordFromFront] = useState("");

  const [userExists, setUserExists] = useState(false);
  console.log("userExists", userExists);
  const [listErrorsSignup, setErrorsSignup] = useState([]);

  var handleSubmitSignup = async () => {
    console.log("handleSubmitSignup", handleSubmitSignup);
    console.log("usernameFromFront", usernameFromFront);
    console.log("emailFromFront", emailFromFront);
    console.log("passwordFromFront", passwordFromFront);

    const data = await fetch("http://10.3.11.5:3000/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `username=${usernameFromFront}&email=${emailFromFront}&password=${passwordFromFront}`,
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
    <View className="sign-Up">
      <TextInput
        style={styles.input}
        onChangeText={(value) => setUsernameFromFront(value)}
        className="Login-input"
        placeholder="username"
        value={usernameFromFront}
      />

      <TextInput
        style={styles.input}
        onChangeText={(value) => setEmailFromFront(value)}
        className="Login-input"
        placeholder="email"
        value={emailFromFront}
      />

      <TextInput
        style={styles.input}
        onChangeText={(value) => setPasswordFromFront(value)}
        className="Login-input"
        placeholder="password"
        value={passwordFromFront}
      />
      {/* {tabErrorsSignup} */}

      <Button
        style={styles.input}
        onPress={() => handleSubmitSignup()}
        style={{ width: "80px" }}
        type="primary"
        title="SIGN-UP"
      ></Button>

      <Button
        style={styles.input}
        onPress={() => goToSignIn()}
        style={{ width: "80px" }}
        type="primary"
        title="ALREADY HAVE UN ACCOUNT? LOGIN"
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

export default signUp;

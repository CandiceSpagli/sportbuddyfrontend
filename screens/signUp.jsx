import React, { useState } from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Input } from "react-native-elements";
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
    <View className="sign-Up">
      <TextInput
        style={styles.input}
        onChangeText={(value) => setFirstnameFromFront(value)}
        className="Login-input"
        placeholder="firstname"
        value={firstnameFromFront}
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setLastnameFromFront(value)}
        className="Login-input"
        placeholder="lastname"
        value={lastnameFromFront}
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setEmailFromFront(value)}
        className="Login-input"
        placeholder="email"
        value={emailFromFront}
      />
      <Input
        style={styles.input}
        onChangeText={(value) => setPasswordFromFront(value)}
        className="Login-input"
        placeholder="password"
        value={passwordFromFront}
        secureTextEntry={true}
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

function mapDispatchToProps(dispatch) {
  return {
    addToken: function (token) {
      dispatch({ type: "addToken", token: token });
    },
  };
}

export default connect(null, mapDispatchToProps)(signUp);

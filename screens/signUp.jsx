import React, { useState } from "react";
import { View, TextInput, Text, Button } from "react-native";

function signUp() {
  const [usernameFromFront, setUsernameFromFront] = useState("");
  const [emailFromFront, setEmailFromFront] = useState("");
  const [passwordFromFront, setPasswordFromFront] = useState("");

  //const [listErrorsSignup, setErrorsSignup] = useState([]);

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
    console.log("body", body);
  };

  return (
    <View className="sign-Up">
      <TextInput
        onChangeText={(value) => setUsernameFromFront(value)}
        className="Login-input"
        placeholder="username"
        value={usernameFromFront}
      />

      <TextInput
        onChangeText={(value) => setEmailFromFront(value)}
        className="Login-input"
        placeholder="email"
        value={emailFromFront}
      />

      <TextInput
        onChangeText={(value) => setPasswordFromFront(value)}
        className="Login-input"
        placeholder="password"
        value={passwordFromFront}
      />
      {/* {tabErrorsSignup} */}

      <Button
        onPress={() => handleSubmitSignup()}
        style={{ width: "80px" }}
        type="primary"
        title="sign-up"
      ></Button>
    </View>
  );
}

export default signUp;

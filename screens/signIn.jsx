import React, { useState } from "react";
import { View, TextInput, Link, Button } from "react-native";

function signIn() {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  //   const [userExists, setUserExists] = useState(false);
  console.log("signInEmail", signInEmail);

  var handleSubmitSignin = async () => {
    console.log("handleSubmitSignin", handleSubmitSignin);
    const data = await fetch("http://10.3.11.5:3000/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `email=${signInEmail}&password=${signInPassword}`,
    });

    const body = await data.json();
    console.log("body", body);
  };

  return (
    <View>
      <TextInput
        onChange={(value) => setSignInEmail(value)}
        className="Login-input"
        placeholder="email"
        value={signInEmail}
      />

      <TextInput
        onChange={(value) => setSignInPassword(value)}
        className="Login-input"
        placeholder="password"
        value={signInPassword}
      />

      {/* {tabErrorsSignin} */}

      <Button
        onPress={() => handleSubmitSignin()}
        style={{ width: "80px" }}
        type="primary"
        title="sign-in"
      ></Button>
    </View>
  );
}

export default signIn;

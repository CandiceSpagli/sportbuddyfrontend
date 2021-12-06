import React from "react";
import { StyleSheet, View } from "react-native";

// native elements
import { Button } from "react-native-elements";


function SportsButtons() {
  return (
    <>
      <Button
        style={styles.sportBtn}
        titleStyle={{
          color: "black",
          fontSize: 30,
        }}
        type="clear"
        title="Fitness"
      />
      <Button
        style={styles.sportBtn}
        titleStyle={{
          color: "black",
          fontSize: 30,
        }}
        type="clear"
        title="Boxe"
      />
      <Button
        style={styles.sportBtn}
        titleStyle={{
          color: "black",
          fontSize: 30,
        }}
        type="clear"
        title="Course"
      />
      <Button
        style={styles.sportBtn}
        titleStyle={{
          color: "black",
          fontSize: 30,
        }}
        type="clear"
        title="Cross-Fit"
      />
    </>
  );
}

const styles = StyleSheet.create({
  sportBtn: {
    borderWidth: 2,
    marginLeft: 20,
    marginRight: 5,
    borderRadius: 50,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 20
  },
});

export default SportsButtons;

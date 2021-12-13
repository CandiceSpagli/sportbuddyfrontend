import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// native elements
import { Button } from "react-native-elements";
// redux
import { connect } from "react-redux";

function SportsButtons(props) {
  const sportsFilterChoice = ["Course", "Yoga", "Fitness"];
  const onButtonPressed = (sport, index) => {
    // props.buttonPressed(sport);
    // console.log("sportsFilterButtons", props.sportsFilterButtons);
    // console.log("témoin", sport);
    if (props.sportsFilterButtons === sport) {
      props.removeSportSelection(sport);
    } else {
      props.buttonPressed(sport);
    }
  };

  const sportsFilterMAP = sportsFilterChoice.map((sport, index) => {
    // console.log(sport);
    let btnStyle = styles.sportBtn;
    let titleColor = "black";
    if (props.sportsFilterButtons === sport) {
      btnStyle = styles.sportBtnClicked;
      titleColor = "white";
    } else {
      btnStyle = styles.sportBtn;
    }
    return (
      <Button
        key={index}
        style={btnStyle}
        titleStyle={{
          color: titleColor,
          fontSize: 30,
        }}
        type="clear"
        title={sport}
        onPress={() => onButtonPressed(sport, index)}
      />
    );
  });

  return <>{sportsFilterMAP}</>;
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
    marginBottom: 20,
  },
  sportBtnClicked: {
    backgroundColor: "black",
    borderWidth: 2,
    marginLeft: 20,
    marginRight: 5,
    borderRadius: 50,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 20,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    buttonPressed: function (sport) {
      // console.log('sportFilterButtonClicked!');
      dispatch({ type: "sportFilterButtonClicked", sport });
    },
    removeSportSelection: function (sport) {
      dispatch({ type: "removeSportSelection", sport });
    },
  };
}

function mapStateToProps(state) {
  return { sportsFilterButtons: state.sportsFilterButtons };
}

export default connect(mapStateToProps, mapDispatchToProps)(SportsButtons);

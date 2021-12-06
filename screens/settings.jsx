import React from "react";

// import RangeSlider from "react-native-range-slider";

import { View, Text } from "react-native";

function settings() {
  return (
    <View>
      <Text>Ajout d'une session</Text>

      {/* <View style={{ flex: 1, flexDirection: "row" }}>
        <RangeSlider
          minValue={0}
          maxValue={100}
          tintColor={"#da0f22"}
          handleBorderWidth={1}
          handleBorderColor="#454d55"
          selectedMinimum={20}
          selectedMaximum={40}
          style={{ flex: 1, height: 70, padding: 10, backgroundColor: "#ddd" }}
          onChange={(data) => {
            console.log(data);
          }}
        />
      </View> */}
    </View>
  );
}

export default settings;

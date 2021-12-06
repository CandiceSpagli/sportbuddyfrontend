import React, { useState } from "react";

import { View, Text, TextInput, StyleSheet, Picker } from "react-native";
import { Button } from "react-native-elements";

import DatePicker from "react-native-datepicker";
import { ScrollView } from "react-native-gesture-handler";

function Settings() {
  const [date, setDate] = useState(new Date());
  const [selectedSport, setSelectedSport] = useState();

  return (
    <View>
      <ScrollView>
        <Text style={styles.step}> STEP 2/3</Text>
        <Text style={styles.text}> Enter your name</Text>
        <TextInput style={styles.input} value={"Candice"} />
        <Text style={styles.text}> Date of birth</Text>
        <DatePicker
          customStyles={{ dateInput: { borderWidth: 0 } }}
          style={styles.date}
          date={date}
          mode="date"
          placeholder="select date"
          format="DD/MM/YYYY"
          minDate="01-01-1930"
          maxDate="01-01-2030"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={(date) => {
            setDate(date);
          }}
        />
        <Text style={styles.text}>Gender</Text>
        <View style={styles.button}>
          <Button
            titleStyle={{ color: "white" }}
            style={styles.woman}
            type="clear"
            title="Woman"
          />
          <Button
            titleStyle={{ color: "white" }}
            style={styles.man}
            type="clear"
            title="Man"
          />
        </View>
        <Text style={styles.level}>Votre niveau en : </Text>
        <Picker
          style={styles.picker}
          selectedValue={selectedSport}
          onValueChange={(itemValue, itemIndex) => setSelectedSport(itemValue)}
        >
          <Picker.Item label="Fitness" value="Fitness" />
          <Picker.Item label="Run" value="Run" />
          <Picker.Item label="Yoga" value="Yoga" />
        </Picker>
        <View>
          <Text>hello</Text>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    padding: 15,
    color: "grey",
    marginTop: 30,
    marginLeft: 20,
  },
  container: {
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
  },

  step: {
    marginTop: 5,
    color: "orange",
    flexDirection: "row",
    marginLeft: 300,
  },
  input: {
    height: 50,
    margin: 4,
    borderWidth: 0.5,
    padding: 15,
    borderRadius: 15,
    marginLeft: 30,
    marginRight: 30,
    borderColor: "rgba(244, 44, 4, 0.4)",
  },
  date: {
    height: 50,
    width: 310,
    borderWidth: 0.5,
    borderRadius: 15,
    marginLeft: 30,
    marginRight: 30,
    borderColor: "rgba(244, 44, 4, 0.4)",
  },
  button: {
    marginTop: 10,
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
  },

  woman: {
    color: "white",
    backgroundColor: "#F53A15",
    borderWidth: 0.5,
    borderRadius: 30,
    height: 45,
    width: 100,
    borderColor: "rgba(244, 44, 4, 0.4)",
  },
  man: {
    color: "white",
    backgroundColor: "#F53A15",
    borderWidth: 0.5,
    borderRadius: 30,
    height: 45,
    width: 100,
    marginLeft: 15,
    borderColor: "rgba(244, 44, 4, 0.4)",
  },

  level: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 50,
    marginTop: 15,
    padding: 10,
  },
  fitness: {
    color: "white",
    borderColor: "rgba(244, 44, 4, 0.4)",
    borderWidth: 0.5,
    borderRadius: 30,
  },
  picker: {
    height: 100,
    width: 100,
    marginBottom: 100,
    marginTop: -120,
    marginLeft: 250,
  },
});

export default Settings;

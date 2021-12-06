import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// icons
import { FontAwesome5 } from "@expo/vector-icons";

function BuddieCard() {
  return (
    <View style={{marginBottom: 15}}>
      <View>
        <Image
          style={styles.profilBox}
          source={require('../../img/staticImg/user.jpg')}
        />
      </View>
      <View>
        <Text style={styles.kmContent}>à 0.2km</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <Text style={styles.textContent}>Christelle</Text>
            <Text style={styles.textContent}>Degiovanni</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome5 name="medal" size={24} color="#f42c04" />
              <FontAwesome5 name="medal" size={24} color="#f42c04" />
              <FontAwesome5 name="medal" size={24} color="#f42c04" />
            </View>
            <Text style={styles.textContentwColor}>Course</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  kmContent: {
    fontSize: 20,
    marginLeft: 22,
  },
  textContent: {
    fontSize: 20,
  },
  textContentwColor: {
    fontSize: 20,
    color: '#f42c04'
  },
  profilBox: {
    flexDirection: "row",
    height: 175,
    width: 175,
    margin: 10,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default BuddieCard;

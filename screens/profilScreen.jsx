import React, { useState } from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import { Button, Overlay, Card, Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import { FontAwesome5 } from "@expo/vector-icons";

function ProfilScreen(props) {
  const [myLevel, setMyLevel] = useState(0);
  console.log("myLevel from ProfilScreen", myLevel);
  const goToSession = () => {
    props.navigation.navigate("Session");
  };

  const tabLevel = [];
  for (var i = 0; i < 3; i++) {
    let color = "#DCDCDC";
    if (i < myLevel) {
      color = "black";
    }
    let count = i + 1;
    tabLevel.push(
      <FontAwesome5
        key={count}
        name="medal"
        size={15}
        color={color}
        onPress={() => setMyLevel(count)}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        fontSize: 30,
        fontFamily: "Cochin",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Profil</Text>
      <Text></Text>
      <View style={styles.card}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "Cochin",
            marginTop: 15,
            textAlign: "center",
          }}
        >
          Profil
        </Text>
        <ImageBackground
          source={require("../img/staticImg/entrainementfit.png")}
          resizeMode="cover"
          style={styles.avatar}
        >
          <Text
            style={{
              fontSize: 19,
              fontFamily: "Cochin",
              color: "white",
              textAlign: "center",
              marginTop: 80,
              backgroundColor: "black",
            }}
          >
            Christelle
          </Text>
          <Text
            style={{
              fontSize: 19,
              fontFamily: "Cochin",
              color: "white",
              textAlign: "center",
              backgroundColor: "black",
            }}
          >
            Degiovanni
          </Text>
        </ImageBackground>

        <Button
          style={styles.select}
          type="clear"
          title="+ Session"
          titleStyle={{ color: "black" }}
          onPress={() => goToSession()}
        ></Button>
        <Text
          style={{
            fontFamily: "Cochin",
            fontSize: 15,
            textAlign: "justify",
            marginLeft: 15,
            marginRight: 15,
          }}
        >
          Vous êtes un vrai athlèThe standard chunk of Lorem Ipsum used since
          the 1500s is reproduced below for those interested. Sections 1.10.32
          and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.te!
        </Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.sportCard}>
            <Image
              source={require("../img/staticImg/entrainementfit.png")}
              resizeMode="cover"
              style={styles.image}
            ></Image>
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Cochin",
                marginLeft: 10,
                marginTop: 15,
              }}
            >
              5 seances
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Cochin",
                marginLeft: 10,
              }}
            >
              Debutant
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 10,
                marginTop: 5,
              }}
            >
              {tabLevel}
            </View>
          </View>
          <View style={styles.sportCard}>
            <Image
              source={require("../img/staticImg/entrainementfit.png")}
              resizeMode="cover"
              style={styles.image}
            ></Image>
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Cochin",
                marginLeft: 10,
                marginTop: 15,
              }}
            >
              5 seances
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Cochin",
                marginLeft: 10,
              }}
            >
              Debutant
            </Text>
            <Text
              style={{
                marginLeft: 10,
                marginTop: 5,
              }}
            >
              <FontAwesome5 style={styles.icon} name="medal" color="#DCDCDC" />
              <FontAwesome5 style={styles.icon} name="medal" color="#DCDCDC" />
              <FontAwesome5 style={styles.icon} name="medal" color="#DCDCDC" />
            </Text>
          </View>
          <View style={styles.sportCard}>
            <Image
              source={require("../img/staticImg/entrainementfit.png")}
              resizeMode="cover"
              style={styles.image}
            ></Image>
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Cochin",
                marginLeft: 10,
                marginTop: 15,
              }}
            >
              5 seances
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Cochin",
                marginLeft: 10,
              }}
            >
              Debutant
            </Text>
            <Text
              style={{
                marginLeft: 10,
                marginTop: 5,
              }}
            >
              <FontAwesome5 style={styles.icon} name="medal" color="#DCDCDC" />
              <FontAwesome5 style={styles.icon} name="medal" color="#DCDCDC" />
              <FontAwesome5 style={styles.icon} name="medal" color="#DCDCDC" />
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 600,
    width: 300,
    backgroundColor: "rgba(244, 44, 4, 0.4)",
    alignContent: "center",
    borderRadius: 30,
  },
  sportCard: {
    height: 160,
    width: 160,
    backgroundColor: "rgba(244, 44, 4, 0.4)",
    alignContent: "center",
    borderRadius: 30,
    marginRight: 70,
    marginLeft: 70,
    marginTop: 15,
  },
  image: {
    height: 80,
    width: 80,
    backgroundColor: "white",
    alignContent: "center",
    borderRadius: 30,
    marginLeft: 40,
  },
  select: {
    backgroundColor: "white",
    borderRadius: 30,
    width: 120,
    justifyContent: "center",
    marginHorizontal: 90,
    marginTop: 15,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "black",
  },
  avatar: {
    height: 120,
    width: 120,
    backgroundColor: "rgba(244, 44, 4, 0.4)",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginLeft: 90,
    marginTop: 15,
  },
});

export default ProfilScreen;

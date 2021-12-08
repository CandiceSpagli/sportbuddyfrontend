import React from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight } from "react-native";
import { connect } from "react-redux";

// icons
import { FontAwesome5 } from "@expo/vector-icons";

function BuddieCard(props) {

  const user = {
    firstname: 'Christelle',
    lastname: 'Degiovanni',
    sport: 'Fitness'
  }


  const onCardPress = () => {
    // console.log('hey');
    props.cardPressed(user)
    // console.log('users Array !!', user);
  }

  return (
    <TouchableHighlight
      style={{
        borderRadius: 50
      }}
      underlayColor='white'
      onPress={() => onCardPress()}
    >
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
            <Text style={styles.textContent}>{user.firstname}</Text>
            <Text style={styles.textContent}>{user.lastname}</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome5 name="medal" size={24} color="#f42c04" />
              <FontAwesome5 name="medal" size={24} color="#f42c04" />
              <FontAwesome5 name="medal" size={24} color="#f42c04" />
            </View>
            <Text style={styles.textContentwColor}>{user.sport}</Text>
          </View>
        </View>
      </View>
    </View>
    </TouchableHighlight>
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

function mapDispatchToProps(dispatch) {
  return{
    cardPressed: function(user) {
      console.log('cardPressed!');
      dispatch({type: 'cardClicked', user})
    }
  }
}

export default connect (
  null,
  mapDispatchToProps
) (BuddieCard);

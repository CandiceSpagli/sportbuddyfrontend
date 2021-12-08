import React, { useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { connect } from "react-redux";
import { BlurView } from "expo-blur";


function BuddiePopUp(props) {
  // const [visible, setVisible] = useState(true);
  // console.log('visibleState' , visible);
  const exitPopUp = () => {
    // console.log('exitPopUp clicked');
    // setVisible(visible === true ? false : true);
    props.removeUser()
  };

  if (props.user === null) {
    return null;
  }

  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={true}>
  
        <BlurView style={styles.container} tint="light" intensity={80}>
        
          <View style={styles.box}>
            <Image
              style={styles.profil}
              source={require("../../img/staticImg/user.jpg")}
            />
            <Text style={styles.firstname}>{props.user.firstname}</Text>
            <Text style={styles.lastname}>{props.user.lastname}</Text>
          </View>
          <TouchableOpacity
            onPress={() => exitPopUp()}
          >
          <Text style={styles.closeBtn}>
            Fermer
          </Text>
        </TouchableOpacity>
        </BlurView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
    
  },
  box: {
    backgroundColor: "white",
    borderRadius: 60,
    height: 700,
    width: 350,
    shadowColor: "black",
    shadowRadius: 12,
    shadowOpacity: 0.1,
    alignItems: "center",
  },
  profil: {
    marginTop: -30,
    height: 175,
    width: 175,
    borderRadius: 100,
  },
  closeBtn: {
    fontSize: 20,
    justifyContent: 'center',
    marginTop: 20
  },
  firstname: {
    fontSize: 30,
    marginTop: -50,
    backgroundColor: 'black',
    color: 'white',
    paddingTop: 3,
    paddingLeft: 15,
    paddingRight: 15,
  },
  lastname: {
    fontSize: 30,
    backgroundColor: 'black',
    color: 'white',
    paddingBottom: 6,
    paddingLeft: 15,
    paddingRight: 15,
  }
});

function mapDispatchToProps(dispatch) {
  return{
    removeUser: function(user) {
      // console.log('removeUser!');
      dispatch({type: 'removeUser', user})
    }
  }
}

export default connect (
  null,
  mapDispatchToProps
) (BuddiePopUp);

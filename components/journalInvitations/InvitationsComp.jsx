import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

// UserInvitationCard
import UserInvitationCard from "../journalInvitations/UserInvitationCard";
function invitationsComp(props) {

  const invitations = [0, 1, 2, 3]

  const invitationsMAP = invitations.map((invitations, index) => {
    return (
      <UserInvitationCard
      key={index}
       navigation={props.navigation}
      />

    )
  })

  return (
    <ScrollView style={styles.container}>
      {invitationsMAP}
      <View style={{marginBottom:70}}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "blue",
  },
});

export default invitationsComp;

import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";

// FuturBuddyCard
import FuturBuddyCard from "./FuturBuddyCard";

// UserHistoryCard
import UserHistoryCard from "./UserHistoryCard";

function HistoryComp(props) {
  console.log("sessionsHistorique", props.sessionsHistorique);
  console.log("props.users", props.users.length);
  return (
    <View style={styles.container}>
      <ScrollView>
        <FuturBuddyCard />
        <View style={{ opacity: 0.5 }}>
          {props.users.map((user, index) => {
            console.log("journal/HistoryComp user", user);
            return <UserHistoryCard key={index} user={user} />;
          })}
        </View>
        <View style={{ marginBottom: 70 }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// export default HistoryComp;
function mapStateToProps(state) {
  return { sessionsHistorique: state.userInfosModal };
}

export default connect(mapStateToProps, null)(HistoryComp);

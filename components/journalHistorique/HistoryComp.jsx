import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

// FuturBuddyCard
import FuturBuddyCard from "../journalHistorique/FuturBuddyCard";

// UserHistoryCard
import UserHistoryCard from "../journalHistorique/UserHistoryCard";

function historyComp() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <FuturBuddyCard />
        <View style={{ opacity: 0.5 }}>
          <UserHistoryCard />
          <UserHistoryCard />
          <UserHistoryCard />
          <UserHistoryCard />
          <UserHistoryCard />
          <UserHistoryCard />
          <UserHistoryCard />
          <UserHistoryCard />
          <UserHistoryCard />
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

export default historyComp;

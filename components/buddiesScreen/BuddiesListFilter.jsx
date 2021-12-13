import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";

// components
import SportsButtons from "./SportsButtons";
import BuddieCard from "./BuddieCard";

function BuddiesListFilter() {
  const [sessionsCards, setSessionsCards] = useState([]);
  // console.log("sessionsCards", sessionsCards);
  useEffect(() => {
    async function buddiesCardsInfos() {
      // const rawResponse = await fetch('http://192.168.1.29:3000/buddiesScreen')
      const rawResponse = await fetch("http://10.3.11.6:3000/buddiesScreen");
      const response = await rawResponse.json();
      setSessionsCards(response.sessions);
    }
    buddiesCardsInfos();
  }, []);

  const sessionsCardsMAP = sessionsCards.map((sessionInfos, index) => {
    // console.log('sessionInfos', sessionInfos);
    return (
      <BuddieCard
        key={index}
        firstname={sessionInfos.creatorId.firstname}
        lastname={sessionInfos.creatorId.lastname}
        sport={sessionInfos.sport}
        level={sessionInfos.level}
        date={sessionInfos.date}
        time={sessionInfos.date}
        location={sessionInfos.location}
        // pic={sessionInfos.pic}
      />
    );
  });

  return (
    <>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <SportsButtons />
        </ScrollView>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        {sessionsCardsMAP}
      </ScrollView>
    </>
  );
}

export default BuddiesListFilter;

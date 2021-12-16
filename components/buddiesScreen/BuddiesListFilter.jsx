import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";

// components
import SportsButtons from "./SportsButtons";
import BuddieCard from "./BuddieCard";
import { connect } from "react-redux";

function BuddiesListFilter(props) {
  const [sessionsCards, setSessionsCards] = useState([]);
  // console.log("sessionsCards", sessionsCards);

  // console.log('props.filterParams', props.filterParams);

  // const [isSportSelected, setIsSportSelected] = useState(false);
  // const [sport, setSport] = useState("");
  // console.log("sportSelected", props.sportsFilterButtons);
  // setSportSelected(props.sportsFilterButtons);

  useEffect(() => {
    async function buddiesCardsInfos() {
      // const rawResponse = await fetch('http://192.168.1.29:3000/buddiesScreen')
      const rawResponse = await fetch("http://10.3.11.6:3000/buddiesScreen");
      const response = await rawResponse.json();

      setSessionsCards(response.sessions);
    }
    buddiesCardsInfos();
  }, []);

  const filterCardsBySport = sessionsCards.filter((sessionCard) => {
    if (props.sportsFilterButtons === null) {
      return true;
    }
    if (props.sportsFilterButtons === sessionCard.sport) {
      return true;
    }
  });

  const filterCardsByLevel = filterCardsBySport.filter((sessionCard) => {
    // console.log('props.filterParams.level', props.filterParams);
    // console.log('sessionCard.level', sessionCard.level);
    if (props.filterParams.level === undefined) {
      return true;
    }
    if (props.filterParams.level === sessionCard.level) {
      return true;
    }
  });

  const filterCardsByDate = filterCardsByLevel.filter((sessionCard) => {
    console.log("props.filterParams.date", props.filterParams.date);
    console.log("sessionCard.date", sessionCard.date);
    if (props.filterParams.date === undefined) {
      return true;
    }
    if (props.filterParams.date === sessionCard.date) {
      return true;
    }
  });

  const filterSessionsCards = filterCardsByLevel;

  const sessionsCardsMAP = filterSessionsCards.map((sessionInfos, index) => {
    console.log("sessionInfos", sessionInfos);
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
        picture={sessionInfos.creatorId.picture}
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

function mapStateToProps(state) {
  return { sportsFilterButtons: state.sportsFilterButtons };
}

export default connect(mapStateToProps, null)(BuddiesListFilter);

import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";

// components
import SportsButtons from "./SportsButtons";
import BuddieCard from "./BuddieCard";
import { connect } from "react-redux";
import { useIsFocused } from "@react-navigation/native";

function BuddiesListFilter(props) {
  const [sessionsCards, setSessionsCards] = useState([]);

  const isFocused = useIsFocused();
  // console.log("sessionsCards", sessionsCards);

  console.log("props.filterParams", props.filterParams);
  console.log("isFocused", isFocused);

  // const [isSportSelected, setIsSportSelected] = useState(false);
  // const [sport, setSport] = useState("");
  // console.log("sportSelected", props.sportsFilterButtons);
  // setSportSelected(props.sportsFilterButtons);

  useEffect(() => {
    async function buddiesCardsInfos() {
      console.log("Buddies List filter useEffect");
      // const rawResponse = await fetch('http://192.168.1.29:3000/buddiesScreen')
      // const rawResponse = await fetch("http://10.3.11.6:3000/buddiesScreen");
      // const rawResponse = await fetch("http://192.168.1.13:3000/buddiesScreen");
      const rawResponse = await fetch("http://10.3.11.5:3000/buddiesScreen");
      const response = await rawResponse.json();
      console.log("buddyListFilter Response", response);

      console.log("sessionsLength", response.sessions.length);

      setSessionsCards(response.sessions);
    }
    buddiesCardsInfos();
  }, [isFocused]);

  const getFormattedDate = (date) => {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  };

  const filterCardsBySport = sessionsCards.filter((sessionCard) => {
    // if (sessionCard._id === "61bb10310352b97c8cf78911") {
    //   console.log('filter sport Super yoga')
    // }
    if (props.sportsFilterButtons === null) {
      return true;
    }
    if (
      props.sportsFilterButtons.toLowerCase() ===
      sessionCard.sport.toLowerCase()
    ) {
      return true;
    }
  });

  const filterCardsByLevel = filterCardsBySport.filter((sessionCard) => {
    // if (sessionCard._id === "61bb10310352b97c8cf78911") {
    //   console.log('filter level Super yoga')
    // }
    // console.log('props.filterParams.level', props.filterParams);
    // console.log('sessionCard.level', sessionCard.level);
    if (props.filterParams.level === undefined) {
      return true;
    }
    if (sessionCard.level >= props.filterParams.level) {
      return true;
    }
  });

  const filterCardsByDate = filterCardsByLevel.filter((sessionCard) => {
    // if (sessionCard._id === "61bb10310352b97c8cf78911") {
    //   console.log('filter date Super yoga')
    // }
    // console.log('props.filterParams.date', props.filterParams.date);
    // console.log('########################sessionCard.date', sessionCard.date.getMonth());
    // console.log('typeof', typeof props.filterParams.date)
    if (props.filterParams.date === undefined) {
      return true;
    }
    const date = new Date(sessionCard.date);

    const fmtDateFilter = getFormattedDate(props.filterParams.date);
    const fmtDateCard = getFormattedDate(date);

    // console.log(' sessionCard.date', sessionCard.date)
    // console.log('fmtDateFilter', fmtDateFilter)
    // console.log('fmtDateCard', fmtDateCard)
    if (fmtDateFilter === fmtDateCard) {
      return true;
    }
  });

  // console.log('filterCardsBySport.length', filterCardsBySport.length)
  // console.log('filterCardsByLevel.length', filterCardsByLevel.length)
  // console.log('filterCardsByDate.length', filterCardsByDate.length)

  // const filterSessionsCards = filterCardsByDate

  const filterSessionsCards = filterCardsByLevel;

  const sessionsCardsMAP = filterSessionsCards.map((sessionInfos, index) => {
    console.log("&&&&&&&&&sessionInfos", sessionInfos);
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
        sessionId={sessionInfos._id}
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

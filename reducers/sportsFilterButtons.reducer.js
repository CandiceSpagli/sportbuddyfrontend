export default function (sport = null, action) {
  //   console.log("action", action);
  //   console.log("action.sport", action.sport);
  if (action.type === "sportFilterButtonClicked") {
    return action.sport;
  } else if (action.type === "removeSportSelection") {
    return null;
  } else {
    return sport;
  }
}

export default function (user = null, action) {
  // console.log('booleanValue', booleanValue);
  console.log('action', action);
  if (action.type === "cardClicked") {
    return action.user
  } else if (action.type === "removeUser") {
    return null
  } else {
    return user
  }
}

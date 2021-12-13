export default function (user = null, action) {
  // console.log('action_userModal', action);
  if (action.type === "cardClicked") {
    return action.user
  } else if (action.type === "removeUser") {
    return null
  } else {
    return user
  }
}

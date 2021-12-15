export default function (userInfos = null, action) {
  // console.log('action_userModal', action);
  if (action.type === "userCardClicked") {
    return action.userInfos;
  }
  // else if (action.type === "removeUser") {
  //   return null
  // }
  else {
    return userInfos;
  }
}

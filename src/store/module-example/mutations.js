import { T } from "./types";

export const mutations = {
  [T.JOIN_USER](state, userInfo) {
    console.log(`mutation [T.JOIN_USER] userInfo = ${JSON.stringify(userInfo)}`);
    state.loginUser = userInfo;
    let userData = JSON.stringify(userInfo);
    console.log("localstoage" + userData);
    localStorage.setItem("loginUser", userData);
  },
  [T.CHANGE_SUCCESS_MESSAGE](state, userInfo) {
    console.log(`mutation [T.CHANGE_SUCCESS_MESSAGE] userInfo = ${JSON.stringify(userInfo)}`);
    state.loginUser = userInfo;
    let userData = JSON.stringify(userInfo);
    console.log("localstoage" + userData);
    localStorage.setItem("loginUser", userData);
  }
}
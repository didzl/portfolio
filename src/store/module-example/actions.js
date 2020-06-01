import { ajaxActions } from "./ajaxActions";

export const actions = {
  [T.JOIN_USER]({ commit }, params) {
    console.log(`store action [T.JOIN_USER] joinUser = ${params.joinUser}`);
    ajaxActions.joinUser(
      params.joinUser,
      results => {
        console.log(`action / JOIN_USER / success`);
        console.log(" reults=", results);
        if (params.cb) {
          params.cb(results);
        }
      },
      res => {
        console.log(`action / JOIN_USER / error`, res);
        commit(T.JOIN_USER);
      }
    );
  },
  
  [T.CHANGE_SUCCESS_MESSAGE]({ commit }, text) {
    console.log(`store action [T.CHANGE_SUCCESS_MESSAGE] text = ${text}`);
    commit(T.CHANGE_SUCCESS_MESSAGE, text);
  },
}
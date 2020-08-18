import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root';
import { postUser, postSession, deleteSession } from './util/session_api_util';
import { login, signup, logout } from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");

  //test
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.postUser = postUser;
    window.postSession = postSession;
    window.deleteSession = deleteSession;
  //test

  ReactDOM.render(<Root store={store}/>, root);
});


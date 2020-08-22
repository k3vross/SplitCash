import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root';
import { postUser, postSession, deleteSession } from './util/session_api_util';
import { login, signup, logout } from './actions/session_actions';
import { postRequest, deleteRequest, fetchRequests} from './util/friend_request_api_util';
import { sendRequest, clearRequest, getAllRequests  } from './actions/friend_actions';


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
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
    window.postRequest = postRequest;
    window.deleteRequest = deleteRequest;
    window.sendRequest = sendRequest;
    window.clearRequest = clearRequest;
    window.fetchRequests = fetchRequests;
    window.getAllRequests = getAllRequests;
  //test

  ReactDOM.render(<Root store={store}/>, root);
});


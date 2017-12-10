// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import firebase from "firebase";
import vuex from "vuex";
import VueMaterial from "vue-material";
// or vue-material/dist/vue-material.min.css I don't know...
import "vue-material/dist/vue-material.css";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA7Z7bfhy9eGhJyJ0rZiwrza2BC9DgtuoE",
  authDomain: "heads-dev.firebaseapp.com",
  databaseURL: "https://heads-dev.firebaseio.com",
  projectId: "heads-dev",
  storageBucket: "heads-dev.appspot.com",
  messagingSenderId: "834666863687"
};
firebase.initializeApp(config);

// Initialise the firestore DB (it does not work, firestore() is not recognized, test if necessay and if it automatically connects to Firestore)
// var db = firebase.firestore();

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  // I added vuex and VueMaterial (hope this works !!!) alternate is Vue.use(vuex) and Vue.use(VueMaterial)
  vuex,
  VueMaterial,
  template: "<App/>",
  components: { App }
});

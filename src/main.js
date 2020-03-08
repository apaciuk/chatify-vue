import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import AlertComponent from './components/Shared/Alert.vue'



Vue.config.productionTip = false
Vue.component('app-alert', AlertComponent)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
    apiKey: "AIzaSyBvmQOCpYCJJIxhMO1NKgcTz6ufhY0kPRI",
    authDomain: "fir-chat-757be.firebaseapp.com",
    databaseURL: "https://fir-chat-757be.firebaseio.com",
    projectId: "fir-chat-757be",
    storageBucket: "fir-chat-757be.appspot.com",
    messagingSenderId: "1020963681391",
    appId: "1:1020963681391:web:83b3a0d48e66ab1b47099a",
    measurementId: "G-N3TYPGBZBB"
    })
  }
}).$mount('#app')
   

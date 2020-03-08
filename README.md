## Chatify Vue

A chat built with Vue + Vuex + Vuetify + Firebase.

## Features

* Basic authentication with Firebase
* Create chat rooms, join them, talk to people, have discussions!
* Use emoji-picker to express your emotions.
* Scroll up to load previous messages.

## Live Demo

## Repo

https://github.com/xhostcom/chatify-vue.git

## Configuration

Edit main.js to initialize your own Firebase Database.

Use the one already there to play around with, then set up own firebase database to use for own group..

LIKE THIS:

Set up Firebase project first, and put auth keys/details in main.js, also select email auth option in firebase console and set auth in firebase auth rules tab to read/write true - IMPORTANT DO NOT MISS! or the user wont be allowed to register.

 "rules": {
   ".read": true,
   ".write": true
  }
}

## FAQ

Q. Is this normal?

A. Yes. This is perfectly normal.

## Author

Paul Anthony McGowan

## Author URL

https://www.xhostcom.com

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report



For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

...bash





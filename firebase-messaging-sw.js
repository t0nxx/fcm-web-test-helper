importScripts("https://www.gstatic.com/firebasejs/5.8.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.8.4/firebase-messaging.js");
var config = {
    apiKey: "AIzaSyA4uYIEBbLeoOcMyjHaxWqLTDqNPFAmzRo",
    authDomain: "noti-app-d778e.firebaseapp.com",
    databaseURL: "https://noti-app-d778e.firebaseio.com",
    projectId: "noti-app-d778e",
    storageBucket: "noti-app-d778e.appspot.com",
    messagingSenderId: "33652243207"
  };
  firebase.initializeApp(config);
  const messaging = firebase.messaging();


messaging.setBackgroundMessageHandler(function(payload) {
  console.log('new message', payload);
  // Customize notification here
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.msg 
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});
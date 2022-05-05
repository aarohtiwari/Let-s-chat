
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAeRZok2_FRq57Urtex4cgtYSG3V-Jpv24",
    authDomain: "practice-base-b75bb.firebaseapp.com",
    databaseURL: "https://practice-base-b75bb-default-rtdb.firebaseio.com",
    projectId: "practice-base-b75bb",
    storageBucket: "practice-base-b75bb.appspot.com",
    messagingSenderId: "448953938920",
    appId: "1:448953938920:web:3e0f812c969c88701aea5d"
  };
  firebase.initializeApp(firebaseConfig);  
    user_name = localStorage.getItem("User Name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addroom() {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose : "Adding Room Name"
        });
        localStorage.setItem("room_name", room_name);
        window.location("kwitter_page.html");
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
    console.log(nane);
    localStorage.setItem("room_name", name);
    window.location = "kwiiter_page.html"
}
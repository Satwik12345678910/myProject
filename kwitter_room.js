//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAxUm5nLiR3ljcUGKQhajGkWU739uwXTwI",
      authDomain: "kwitter-a346b.firebaseapp.com",
      databaseURL: "https://kwitter-a346b-default-rtdb.firebaseio.com",
      projectId: "kwitter-a346b",
      storageBucket: "kwitter-a346b.appspot.com",
      messagingSenderId: "144612004350",
      appId: "1:144612004350:web:d789fb8601d524b3edf0af"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name");
      window.location="kwitter_page.html";
}

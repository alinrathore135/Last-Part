// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDGnFHNnWmPSxuITqiRUqPgzuW5neV3CE8",
    authDomain: "classtest-9db2e.firebaseapp.com",
    databaseURL: "https://classtest-9db2e-default-rtdb.firebaseio.com",
    projectId: "classtest-9db2e",
    storageBucket: "classtest-9db2e.appspot.com",
    messagingSenderId: "874268215516",
    appId: "1:874268215516:web:23c1ed018ab38259488c19",
    measurementId: "G-FN6XX2T6NR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML})
  Room_name = childKey;
  //Start code
  console.log("Room Name -"+ Room_name);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
//End code
  }

  getData();

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    })

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_room.html";
  }

  function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name)
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}
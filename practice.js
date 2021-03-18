// PASTE YOUR FIREBASE LINK HERE

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.datbase().ref("/").child(user_name).update({
        purpose : "adding user"
    })
}

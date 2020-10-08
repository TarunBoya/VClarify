var firebaseHeading = document.getElementById("fireHeading");

var firebaseHeadingRef = firebase.database().ref().child("Heading");

firebaseHeadingRef.on('value', function(datasnapshot){
	firebaseHeading.innerHTML = datasnapshot.val();
});

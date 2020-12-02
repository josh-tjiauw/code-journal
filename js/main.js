var $avatarUrl = document.getElementById('avatarUrl');
var $username = document.getElementById('username');
var $fullName = document.getElementById('fullName');
var $location = document.getElementById('location');
var $bio = document.getElementById('bio');
var $profilePicture = document.querySelector('img');

$avatarUrl.addEventListener('input', function(event){
  $profilePicture.src = event.target.value;
})

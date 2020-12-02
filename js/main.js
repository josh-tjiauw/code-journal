var $avatarUrl = document.getElementById('avatarUrl');
var $username = document.getElementById('username');
var $fullName = document.getElementById('fullName');
var $location = document.getElementById('location');
var $bio = document.getElementById('bio');
var $profilePicture = document.querySelector('img');
var $form = document.querySelector('form');

$avatarUrl.addEventListener('input', function(event){
  $profilePicture.src = event.target.value;
})

$form.addEventListener('submit', function(event){
  event.preventDefault();
  data['profile']['username'] = $username.value;
  data['profile']['fullName'] = $fullName.value;
  data['profile']['location'] = $location.value;
  data['profile']['avatarURL'] = $avatarUrl.value;
  data['profile']['bio'] = $bio.value;
  $form.reset();
  $profilePicture.src = 'images/placeholder-image-square.jpg';
})

console.log(data);

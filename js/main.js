var $container = document.querySelector('.container');
var $avatarUrl = document.getElementById('avatarUrl');
var $username = document.getElementById('username');
var $fullName = document.getElementById('fullName');
var $location = document.getElementById('location');
var $bio = document.getElementById('bio');
var $profilePicture = document.getElementById('profilePicture');
var $form = document.querySelector('form');
var $profile = document.getElementById('profile');
var $viewNodeList = document.querySelectorAll('.view');
var $header = document.querySelector('header');
var $entries = document.getElementById('entries');
var $createEntry = document.getElementById('create-entry');
var $imgUrl = document.getElementById('imgUrl');
var $entryPicture = document.getElementById('entryPicture');
var $entryForm = document.getElementById('entryForm');
var $entryTitle = document.getElementById('entryTitle');
var $entryNotes = document.getElementById('entryNotes');
var phImage = 'images/placeholder-image-square.jpg';
var allImages = document.querySelectorAll('img');
allImages.onerror = function(){
  this.src = phImage
}

$avatarUrl.addEventListener('input', function(event){
  $profilePicture.src = event.target.value;
  if(event.target.value === ''){
    $profilePicture.src = phImage;
  }
})



$form.addEventListener('submit', function(event){
  event.preventDefault();
  data['profile']['username'] = $username.value;
  data['profile']['fullName'] = $fullName.value;
  data['profile']['location'] = $location.value;
  data['profile']['avatarUrl'] = $avatarUrl.value;
  data['profile']['bio'] = $bio.value;
  $form.reset();
  viewSwap('profile')
})

function displayData(data){
  var $rowOneDiv = document.createElement('div');
  $rowOneDiv.className = 'row';
  var $columnOneDiv = document.createElement('div');
  $columnOneDiv.className = 'column-full';
  var $h1FullName = document.createElement('h1');
  $h1FullName.className = 'reg-text';
  $h1FullName.id = 'displayFullName';
  $h1FullName.textContent = data.profile.fullName;

  var $rowTwoDiv = document.createElement('div');
  $rowTwoDiv.className = 'row';
  var $columnTwoDiv = document.createElement('div');
  $columnTwoDiv.className = 'column-half';
  var $displayProfilePicture = document.createElement('img')
  $displayProfilePicture.alt = 'Profile Picture';
  $displayProfilePicture.src = data.profile.avatarUrl;

  var $columnTwoDiv2 = document.createElement('div');
  $columnTwoDiv2.className = 'column-half';
  var $h2displayUsername = document.createElement('h2');
  $h2displayUsername.className = 'reg-text';
  $h2displayUsername.innerHTML = '<i class="fas fa-user"></i>&Tab;'
  var $spandisplayUsername = document.createElement('span');
  $spandisplayUsername.id = 'displayUsername'
  $spandisplayUsername.textContent = data.profile.username;

  var $rowForLocation = document.createElement('div');
  $rowForLocation.className = 'row';
  var $h2displayLocation = document.createElement('h2');
  $h2displayLocation.className = 'reg-text';
  $h2displayLocation.innerHTML = '<i class="fas fa-map-marker-alt"></i>&Tab;'
  var $spandisplayLocation = document.createElement('span');
  $spandisplayLocation.id = 'displayLocation'
  $spandisplayLocation.textContent = data.profile.location;

  var $rowForBio = document.createElement('div');
  $rowForBio.className = 'row';
  var $pdisplayBio = document.createElement('p');
  $pdisplayBio.className = 'reg-text';
  $pdisplayBio.id = 'displayBio'
  $pdisplayBio.textContent = data.profile.bio;

  var $rowForButton = document.createElement('div');
  $rowForButton.className = 'row';
  var $editButton = document.createElement('button');
  $editButton.setAttribute('href', '#');
  $editButton.setAttribute('data-view', 'edit-profile');
  $editButton.id = 'edit-button';
  $editButton.textContent = 'Edit'

  $rowForButton.appendChild($editButton)
  $rowForBio.appendChild($pdisplayBio);
  $h2displayLocation.appendChild($spandisplayLocation);
  $rowForLocation.appendChild($h2displayLocation);
  $h2displayUsername.appendChild($spandisplayUsername);
  $columnTwoDiv2.appendChild($h2displayUsername);
  $columnTwoDiv2.appendChild($h2displayLocation);
  $columnTwoDiv2.appendChild($pdisplayBio);
  $columnTwoDiv.appendChild($displayProfilePicture);
  $rowTwoDiv.appendChild($columnTwoDiv);
  $rowTwoDiv.appendChild($columnTwoDiv2);
  $columnOneDiv.appendChild($h1FullName);
  $rowOneDiv.appendChild($columnOneDiv);
  $profile.appendChild($rowOneDiv);
  $profile.appendChild($rowTwoDiv);
  $profile.appendChild($rowForButton);
  return $profile;
}

  var $dataViewNodeList = [];
  for(i=0; i<$viewNodeList.length; i++){
    var dvnode = $viewNodeList[i].getAttribute('data-view');
    $dataViewNodeList.push(dvnode);
  }

  function viewSwap(dataview) {
    for(i=0; i<$viewNodeList.length; i++) {
      if(dataview !== $dataViewNodeList[i]){
        $viewNodeList[i].className = 'view hidden';
      }
      else {
        $viewNodeList[i].className = 'view';
        data['view'] = $dataViewNodeList[i];
      }
    }
    if (data['view'] === 'profile') {
      $profile.innerHTML = '';
      displayData(data);
      $container.appendChild($profile);
    }
    else if (data['view'] === 'edit-profile') {
      $avatarUrl.setAttribute('value', data.profile.avatarUrl);
      $profilePicture.src = $avatarUrl.value;
      $username.setAttribute('value', data.profile.username);
      $fullName.setAttribute('value', data.profile.fullName);
      $location.setAttribute('value', data.profile.location);
      $bio.textContent = data.profile.bio;
    }
  }

viewSwap('edit-profile');

document.addEventListener('DOMContentLoaded', function(event){
  if(data.profile.username === ''){
    viewSwap('edit-profile');
    $profilePicture.src = phImage;
  }
})

document.addEventListener('click', function(event){
  if(event.target.nodeName !== 'BUTTON'){
    return;
  }
  else if(event.target.nodeName === 'BUTTON' && data.profile.username === '' && data.view === 'edit-profile'){
    return;
  }
  else {
    viewSwap(event.target.getAttribute('data-view'));
  }
})

var $profileButton = document.createElement('button');
$profileButton.setAttribute('href', '#');
$profileButton.setAttribute('data-view', 'profile');
$profileButton.id = 'profile-button';
$profileButton.textContent = 'Profile'
$header.appendChild($profileButton);

var $entriesButton = document.createElement('button');
$entries.setAttribute('href', '#');
$entriesButton.setAttribute('data-view', 'entries');
$entriesButton.id = 'entries-button';
$entriesButton.textContent = 'Entries'
$header.appendChild($entriesButton);

var $createEntryButton = document.createElement('button');
$createEntryButton.setAttribute('href', '#');
$createEntryButton.setAttribute('data-view', 'create-entry');
$createEntryButton.id = 'create-entry-button';
$createEntryButton.textContent = 'NEW'
$entries.appendChild($createEntryButton);

$imgUrl.addEventListener('input', function(event){
  $entryPicture.src = event.target.value;
})

$entryForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var entry = {
    imgUrl: $imgUrl.value,
    title: $entryTitle.value,
    notes: $entryNotes.value
  };
  data.entries.push(entry);
  $entryForm.reset();
  $entryPicture.src = phImage;
  viewSwap('entries');
})

var previousDataJSON = localStorage.getItem('data');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

window.addEventListener('beforeunload', function (event) {
  event.preventDefault();
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
})

var previousEntryJSON = localStorage.getItem('entry');
if (previousEntryJSON !== null) {
  entry = JSON.parse(previousentryJSON);
}

window.addEventListener('beforeunload', function (event) {
  event.preventDefault();
  var entryJSON = JSON.stringify(entry);
  localStorage.setItem('entry', entryJSON);
})

var $entriesLi = document.createElement('li');
$entries.appendChild($entriesLi);

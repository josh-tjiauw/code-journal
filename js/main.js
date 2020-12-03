var $container = document.querySelector('.container');
var $avatarUrl = document.getElementById('avatarUrl');
var $username = document.getElementById('username');
var $fullName = document.getElementById('fullName');
var $location = document.getElementById('location');
var $bio = document.getElementById('bio');
var $profilePicture = document.querySelector('img');
var $form = document.querySelector('form');
var $profile = document.getElementById('profile');
var $viewNodeList = document.querySelectorAll('.view');

$avatarUrl.addEventListener('input', function(event){
  $profilePicture.src = event.target.value;
})

$form.addEventListener('submit', function(event){
  event.preventDefault();
  data['profile']['username'] = $username.value;
  data['profile']['fullName'] = $fullName.value;
  data['profile']['location'] = $location.value;
  data['profile']['avatarUrl'] = $avatarUrl.value;
  data['profile']['bio'] = $bio.value;
  $form.reset();
  $profilePicture.src = 'images/placeholder-image-square.jpg';
})

function displayData(data){
  //Full Name
  var $rowOneDiv = document.createElement('div');
  $rowOneDiv.className = 'row';
  var $columnOneDiv = document.createElement('div');
  $columnOneDiv.className = 'column-full';
  var $h1FullName = document.createElement('h1');
  $h1FullName.className = 'reg-text';
  $h1FullName.id = 'displayFullName';
  $h1FullName.textContent = data['profile']['fullName'];
  //Profile Picture
  var $rowTwoDiv = document.createElement('div');
  $rowTwoDiv.className = 'row';
  var $columnTwoDiv = document.createElement('div');
  $columnTwoDiv.className = 'column-half';
  var $displayProfilePicture = document.createElement('img')
  $displayProfilePicture.alt = 'Profile Picture';
  $displayProfilePicture.src = data['profile']['avatarUrl'];
  //Username
  var $columnTwoDiv2 = document.createElement('div');
  $columnTwoDiv2.className = 'column-half';
  var $h2displayUsername = document.createElement('h2');
  $h2displayUsername.className = 'reg-text';
  $h2displayUsername.innerHTML = '<i class="fas fa-user"></i>&Tab;'
  var $spandisplayUsername = document.createElement('span');
  $spandisplayUsername.id = 'displayUsername'
  $spandisplayUsername.textContent = data['profile']['username'];
  //Location
  var $rowForLocation = document.createElement('div');
  $rowForLocation.className = 'row';
  var $h2displayLocation = document.createElement('h2');
  $h2displayLocation.className = 'reg-text';
  $h2displayLocation.innerHTML = '<i class="fas fa-map-marker-alt"></i>&Tab;'
  var $spandisplayLocation = document.createElement('span');
  $spandisplayLocation.id = 'displayLocation'
  $spandisplayLocation.textContent = data['profile']['location'];
  //Bio
  var $rowForBio = document.createElement('div');
  $rowForBio.className = 'row';
  var $pdisplayBio = document.createElement('p');
  $pdisplayBio.className = 'reg-text';
  $pdisplayBio.id = 'displayBio'
  $pdisplayBio.textContent = data['profile']['bio'];
  //Append to doc
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
  return $profile;
}
displayData(data);
$container.appendChild($profile);


  var $dataViewNodeList = [];
  for(i=0; i<$viewNodeList.length; i++){
    var dvnode = $viewNodeList[i].getAttribute('data-view');
    $dataViewNodeList.push(dvnode);
  }
  console.log($dataViewNodeList);

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
  }

viewSwap('profile');

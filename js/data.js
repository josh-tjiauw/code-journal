/* exported data */

var data = {
  view: 'edit-profile',
  profile: {
    username: '',
    fullName: '',
    location: '',
    avatarUrl: '',
    bio: ''
  },
  entries: []
};

var newEntry = {
  imgUrl: '',
  entryTitle: '',
  entryNotes: ''
};

var previousDataJSON = localStorage.getItem('data');
if(previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

window.addEventListener('beforeunload', function(event){
  event.preventDefault();
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
})

var previousNewEntryJSON = localStorage.getItem('newEntry');
if (previousNewEntryJSON !== null) {
  newEntry = JSON.parse(previousNewEntryJSON);
}

window.addEventListener('beforeunload', function (event) {
  event.preventDefault();
  var newEntryJSON = JSON.stringify(newEntry);
  localStorage.setItem('newEntry', newEntryJSON);
})

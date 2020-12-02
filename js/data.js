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

var previousDataJSON = localStorage.getItem('data');
if(previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

window.addEventListener('beforeunload', function(event){
  event.preventDefault();
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
})

var requestUrl = 'https://api.github.com/repos/twitter/chill/issues?per_page=8';
// var requestUrl = 'https://api.github.com/users/Javana-Bhikkhu/repos/issues?per_page=8';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Github Repo Issues \n----------');
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].url);
      console.log(data[i].user.login);
    }
  });

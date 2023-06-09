document.addEventListener('DOMContentLoaded', function() {
  const nameElement = document.getElementById('name');
  const usernameElement = document.getElementById('username');
  const avatarElement = document.getElementById('avatar');
  const reposElement = document.getElementById('repos');
  const followersElement = document.getElementById('followers');
  const followingElement = document.getElementById('following');
  const profileLinkElement = document.getElementById('profile-link');

  const request = new XMLHttpRequest();
  request.open('GET', 'https://api.github.com/users/luanafernanda', true);

  request.onload = function() {
    const response = JSON.parse(request.responseText);
    nameElement.innerHTML = response.name;
    usernameElement.innerHTML = response.login;
    avatarElement.src = response.avatar_url;
    reposElement.innerHTML = response.public_repos;
    followersElement.innerHTML = response.followers;
    followingElement.innerHTML = response.following;
    profileLinkElement.href = response.html_url;
  };
  request.send();
});

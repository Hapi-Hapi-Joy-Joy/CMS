const postTitle = document.getElementById('post-title');
const postContent = document.getElementById('post-content');
const postButton = document.getElementById('post-button');

function createPost() {
  const xhr = new XMLHttpRequest();
  const postObj = {
    title: postTitle.value,
    content: postContent.value
  }
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      postTitle.value = '';
      postContent.value = '';
    }
  }
  if (PostContent.value === '') return;
  xhr.open("POST", "/createPost", true);
  xhr.send(JSON.stringify(postObj));
}

function getPosts() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
    }
  }
  xhr.open("GET", "/getPosts", true);
  xhr.send();
}

// window.addEventListener('load', getPosts);
postButton.addEventListener('click', createPost);

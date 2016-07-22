const formTitle = document.getElementById('form-title');
const formContent = document.getElementById('form-content');
const formButton = document.getElementById('form-button');

function createPost() {
  const xhr = new XMLHttpRequest();
  const postObj = {
    title: formTitle.value,
    content: formContent.value
  }
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      formTitle.value = '';
      formContent.value = '';
    }
  }
  if (formTitle === '' || formContent.value === '') return;
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
formButton.addEventListener('click', createPost);

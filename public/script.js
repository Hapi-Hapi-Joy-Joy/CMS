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

function addNewPost(post) {
  post.forEach((elem) => {
    const blogpostContainer = document.getElementsByClassName("blog-post-container")[0];

    const titleContainer = document.createElement('div');
    const postId = document.createElement('h2');
    const postIdContent = document.createTextNode('#' + elem.postid);
    postId.appendChild(postIdContent);
    postId.className = "post-id";
    const postTitle = document.createElement('h2');
    const postTitleContent = document.createTextNode(elem.title);
    postTitle.appendChild(postTitleContent);
    postTitle.className = "post-title";
    titleContainer.appendChild(postId);
    titleContainer.appendChild(postTitle);
    titleContainer.className = "title-container";

    const timestampContainer = document.createElement('div');
    const postUser = document.createElement('p');
    postUser.innerHTML = `<p><b>${elem.username}</b></p>`;
    postUser.className = "post-user";
    const postTimestamp = document.createElement('p');
    postTimestamp.innerHTML = `<p><b>${elem.timestamp}</b></p>`;
    postTimestamp.className = "post-timestamp";
    timestampContainer.appendChild(postUser);
    timestampContainer.appendChild(postTimestamp);
    timestampContainer.className = "timestamp-container";

    const postContent = document.createElement('p');
    const postContentContent = document.createTextNode(elem.post);
    postContent.appendChild(postContentContent);
    postContent.className = "post-content";

    const br = document.createElement('br');
    const hr = document.createElement('hr');

    blogpostContainer.appendChild(titleContainer);
    blogpostContainer.appendChild(timestampContainer);
    blogpostContainer.appendChild(postContent);
    blogpostContainer.appendChild(br);
    blogpostContainer.appendChild(hr);
  });
}

function getPosts() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const postObj = JSON.parse(xhr.response);
      console.log(postObj);
      addNewPost(postObj);
    }
  }
  xhr.open("GET", "/getPosts", true);
  xhr.send();
}

window.addEventListener('load', getPosts);
formButton.addEventListener('click', createPost);

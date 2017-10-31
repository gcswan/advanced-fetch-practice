

function usersRetrieved(response) {
  return response.json();
};

function userJSONReady(users) {
  const usersDiv = document.getElementById("users");
  let usersHTML = "";
  for (let i = 0; i < users.length; i++) {
      const user = users[i];
      usersHTML += "<div>" + user.name + "</div>";
  }
  usersDiv.innerHTML = (usersHTML);
  };



const userData = fetch("https://jsonplaceholder.typicode.com/users")
  .then(usersRetrieved)
  .then(userJSONReady);

const commentDiv = document.getElementById("comments");
let commentHTML = "";

const commentData = fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response)=> {return response.json()})
  .then((comments)=> {comments.forEach(function(comment){
      commentHTML += "<div>" + comment.id + " " + comment.name + "</div>" 
  })
  commentDiv.innerHTML = (commentHTML);
})

  





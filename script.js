function init() {
  renderBooksGallery();
}

function renderBooksGallery() {
  for (let i = 0; i < books.length; i++) {
    document.getElementById("book_container").innerHTML += booksGallery(i);

    for (let j = 0; j < books[i].comments.length; j++) {
      document.getElementById(`comments${i}`).innerHTML += renderComments(i, j);
    }
  }
}

function addComment() {
  for (let i = 0; i < books.length; i++) {
    let addCommentValueRef = document.getElementById(`inputField${i}`);
    let addCommentValue = addCommentValueRef.value;
    let addComment = { name: "Daniel", comment: addCommentValue };

    if (addCommentValue === "") {
    } else {
      books[i].comments.push(addComment);
      document.getElementById(`comments${i}`).innerHTML = "";

      for (let j = 0; j < books[i].comments.length; j++) {
        document.getElementById(`comments${i}`).innerHTML += renderComments(i,j);
        addCommentValueRef.value = "";
      }
    }
  }
}

function toggleLike(i) {
  let liked = document.getElementById(`likeBtn${i}`);
  liked.classList.toggle("d_liked");

  likeCounter(i);
}

function likeCounter(i) {
  let likesRef = document.getElementById(`likeBtn${i}`);
  let likesValue = document.getElementById(`likes${i}`);

  if (likesRef.classList.contains("d_liked") === true) {
    document.getElementById(`likes${i}`).innerHTML = /*html*/ `
            ${books[i].likes + 1}           `;

    console.log(likesRef.classList.contains("d_liked"));
    console.log(books[i].likes);
  } else if (likesRef.classList.contains("d_unliked") === true) {
    document.getElementById(`likes${i}`).innerHTML = /*html*/ `
            ${books[i].likes}
             `;
  }
}

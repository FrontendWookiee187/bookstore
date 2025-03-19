function booksGallery(i){

    return /*html*/`
        <div id="book${i + 1}" class="book">
            <div id="bookTitle${i + 1}" class="bookTitle">${books[i].name}</div>
            <div id="book_picture" class="book_picture" > <img src="assets/img/book_transparent.png" alt=""></div>
            <div id="price_and_likes" class="price_and_likes">
            <div id="price" class="price">${books[i].price.toLocaleString("de-DE", {style: 'currency', currency: 'EUR'})}</div>
           <div id="likeContainer" class="likeContainer">
                <div id="likes${i}" class="likes">${books[i].likes}</div>
                <div id="likeBtn${i}" class="d_unliked" onclick="toggleLike(${i})"></div>
        </div>

        </div>        

        <div id="info_container" class="info_container">
         <div id="author" class="author">Autor: ${books[i].author}</div>
         <div id="publishedYear" class="publishedYear">Erscheinungsjahr: ${books[i].publishedYear}</div>
         <div id="genre" class="genre">Genre: ${books[i].genre}</div>

        </div>

        <div id="comments${i}" class="comments"></div>

        <div id="inputSection${i}" class="inputSection">
            <input id="inputField${i}" class="inputField" type="text" placeholder="Kommentar hinzufügen">
            <button id="sendBtn${i}" onclick="addComment()">abschicken</button>
        </div>      

        </div>      
        `
    }


    function renderComments(i, j){

        return /*html*/`
            <div id="commentNr${i}" class="commentNr">${books[i].comments[j].name}: ${books[i].comments[j].comment}</div>
        `
    }

  

    




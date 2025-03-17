function booksGallery(i){

    return /*html*/`
        <div id="book${i + 1}" class="book">
        <div id="bookTitle${i + 1}" class="bookTitle">${books[i].name}</div>
        <div id="book_picture" class="book_picture" > <img src="assets/img/book.png" alt=""></div>
        <div id="price_and_likes" class="price_and_likes">
        <div id="price" class="price">${books[i].price} €</div>
        <div id="likes" class="likes">${books[i].likes}</div>

        </div>

        <div id="info_container" class="info_container">

        <div id="author" class="author">Autor: ${books[i].author}</div>
        <div id="publishedYear" class="publishedYear">Erscheinungsjahr: ${books[i].publishedYear}</div>
        <div id="genre" class="genre">Genre: ${books[i].genre}</div>

        </div>

        <div id="comments${i}" class="comments"></div>

        <div id="inputField" class="inputField">
            <input type="text" placeholder="Kommentar hinzufügen">
            <button>abschicken</button>
        </div>
        

        


        </div>      
        `
    }


    




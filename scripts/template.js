function booksGallery(i){

    return /*html*/`
        <div id="book${i + 1}" class="book">
        <div id="bookTitle${i + 1}" class="bookTitle">${books[i].name}</div>


        </div>      
        `
    }




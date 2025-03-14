function renderBooksGallery (i){

    for (let i = 0; i < books.length; i++) {
        const element = books[i];

        document.getElementById('book_container').innerHTML += booksGallery(i)

        
    }
}
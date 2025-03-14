function init(){

    renderBooksGallery()
    
    
    
}


function renderBooksGallery (i){

    for (let i = 0; i < books.length; i++) {
        const element = books[i];

        document.getElementById('book_container').innerHTML += booksGallery(i)        
    }

    renderBookTitle()
}

function renderBookTitle(indexTitle){

    for (let indexTitle = 0; indexTitle < books.length; indexTitle++) {
        // let bookName = books[0].name[indexTitle];
        
       let bookName = document.getElementById('bookTitle');
       
       

        console.log(bookName);
    }

    
    
}
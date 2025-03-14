function init(){

    renderBooksGallery() 
    renderBookTitle()  
    
    
}


function renderBooksGallery (i){

    for (let i = 0; i < books.length; i++) {
        const element = books[i];

        document.getElementById('book_container').innerHTML += booksGallery(i)        
    }
    
}

function renderBookTitle(indexTitle){

    for (let indexTitle = 0; indexTitle < books.length; indexTitle++) {
               
        document.getElementById('bookTitle');    
       }   
    
}

function renderPrice(indexPrice){

    for (let indexPrice = 0; indexPrice < books.length; indexPrice++) {
               
        document.getElementById('price');    
       }   
    
}

function renderPrice(indexLikes){

    for (let indexLikes = 0; indexLikes < books.length; indexLikes++) {
               
        document.getElementById('likes');    
       }   
    
}

function renderInfoBox(indexInfo){

    for (let indexInfo = 0; indexInfo < books.length; indexInfo++) {
        
        document.getElementById('author');
        document.getElementById('publishedYear');
        document.getElementById('genre');              
        
    }
}



function renderCommentBox(indexComments){

    for (let indexComments = 0; indexComments < books.comments.length; indexComments++) {
        
        document.getElementById('comments');
                      
        
    }
}

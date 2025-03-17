function init(){

    renderBooksGallery() 
    renderBookTitle()  
    renderPrice()
    renderLikes()
    renderInfoBox()
    // renderCommentBox()
    
    
}


function renderBooksGallery (){

    for (let i = 0; i < books.length; i++) {
        
        document.getElementById('book_container').innerHTML += booksGallery(i)  
                
       
        for (let j = 0; j <books[i].comments.length; j++) {    
            
           
            document.getElementById(`comments${i}`).innerHTML +=
            `<div id="commentNr${i}" class="commentNr">${books[i].comments[j].name}: ${books[i].comments[j].comment}</div>`
            
        }        
        
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

function renderLikes(indexLikes){

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



// function renderCommentBox(indexComments){

//     for (let indexComments = 0; indexComments < books.length; indexComments++) {       
        

//       document.getElementById('comments');       
        
               
        
//     }

    
// }





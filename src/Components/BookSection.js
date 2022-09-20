import { useState } from "react";
import { getAll } from "../BooksAPI";
import Book from "./Book";
import { update } from "../BooksAPI";
function BookSection(props){
    const [books,setBook]=useState([]);
    const handleChange =async (book,value)=>{
        
            await update(book,value)
        // for(var i=0;i<books.length;i++){
        //     if(books[i].id=book.id){
        //         books[i].shelf=value;
        //         break;
        //     }
        // }
     
       }
       const initial=async ()=>{
        
        setBook((await getAll()).filter((book)=>book.shelf.toLowerCase()==props.shelf.toLowerCase()) )
       }
       initial();
    return (
        <div className="bookshelf">
                    <h2 className="bookshelf-title">{props.title}</h2>
                    <div className="bookshelf-books">
                       <ol className="books-grid">
                        {books.map((book)=> <li> {<Book book={book} changeState={handleChange}/>}</li>)}
                      
                      </ol> 
                    </div>
                  </div>
    )
}
export default BookSection
import { useState } from "react";
import { getAll } from "../BooksAPI";
import { update } from "../BooksAPI";
import Book from "./Book";
import { search } from "../BooksAPI";
import { get } from "../BooksAPI";
function Result(props){
    const [books,setBook]=useState([]);
    
    const handleChange =async (book,value)=>{
       
        if(value!=="none")
            await update(book,value)
        // for(var i=0;i<books.length;i++){
        //     if(books[i].id=book.id){
        //         books[i].shelf=value;
        //         break;
        //     }
        // }
     
       }
       const getBooks= async (val)=>{
        const book1=await search(val);
        
        if(book1)
           setBook(book1);
        else
          setBook([])
        alert((await get(books[0])).shelf);
       }
       getBooks(props.val);
       
    return (
        <div className="search-books-results">
                <ol className="books-grid">
                    {books.map((book)=> <Book book={book} changeState={handleChange} /> )}
                  
                </ol>
              </div>
    )   
    
}
export default Result
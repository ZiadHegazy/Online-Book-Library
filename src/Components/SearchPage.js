import "../App.css";
import { Link } from "react-router-dom";
import { getAll } from "../BooksAPI";
import { useState } from "react";
import Book from "./Book";
import { update } from "../BooksAPI";
import Result from "./SearchResuts";
import { search } from "../BooksAPI";
import { get } from "../BooksAPI";
const Search=(props) =>{
  
  const handleChange =async (book,value1)=>{
       
    
      await update(book,value1)
      changeBook(value);
      

    
        
    
 
   }
   const [books,setBook]=useState([])
   const [value,setValue]=useState("");

   const changeBook= async (val)=>{
    const booktemp=await search(val);
    
    if(booktemp && Array.isArray(booktemp)){
      for(var i=0;i<booktemp.length;i++){
        const shelf=(await get(booktemp[i].id)).shelf;
        booktemp[i].shelf=shelf;
      }
      setBook(booktemp);
      
    }
       
    else
      setBook([])

   }
   const changeSearch=(event)=>{
    
    setValue(event.target.value);
    changeBook(event.target.value)
   }
   
    return (
        (
            <div className="search-books">
              <div className="search-books-bar">
                <Link
                  className="close-search"
                  to="/"
                >
                  Close
                </Link>
                <div className="search-books-input-wrapper">
                  <input
                    type="text"
                    placeholder="Search by title, author, or ISBN"
                    
                    onChange={changeSearch}
                  />
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                  
                    {books.map((book)=> <Book book={book} changeState={handleChange} /> )}
                  
                </ol>
              </div>
            </div>
          )
    )
}
export default Search;
import "../App.css";
import { Link } from "react-router-dom";
import { getAll } from "../BooksAPI";
import { useState } from "react";
import Book from "./Book";
import { update } from "../BooksAPI";
import Result from "./SearchResuts";
const Search=(props) =>{
  
   
   const [value,setValue]=useState("");
   
   const changeSearch=(event)=>{
    setValue(event.target.value);
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
              <Result val={value}/>
            </div>
          )
    )
}
export default Search;
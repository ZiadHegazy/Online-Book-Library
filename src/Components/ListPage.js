import "../App.css";
import Book from "./Book";
import { getAll } from "../BooksAPI";
import { useEffect, useState
 } from "react";
 import { update } from "../BooksAPI";
 import { Link } from "react-router-dom";
 import { useNavigate } from "react-router-dom";
 import BookSection from "./BookSection";
const Books = (props)=>{
    return (
        (
            
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  
                  <BookSection title="Currently Reading" shelf="currentlyReading"/>
                  <BookSection title="Want To Read" shelf="wanttoRead"/>
                  <BookSection title="Read" shelf="Read"/>

                
                </div>
              </div>
              <div className="open-search">
                
                <Link to="/search">Add a book</Link>
              </div>
            </div>
        ) 
    )
}
export default Books;
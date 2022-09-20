import React,{Component,useState,useEffect} from "react"
import { get, getAll } from "../BooksAPI";
function Book(props){
    const[shelf,setShelf]=useState("");
    const start=async()=>{
      const shelf=(await get(props.book.id)).shelf
      setShelf(shelf);
    }
    const changeBookState =(event)=>{
      setShelf(event.target.value);
      props.changeState(props.book,event.target.value);
    }
    start();
    return (
      <div>
        {/* <li>{JSON.stringify(books[0].imageLinks)}</li> */}
         
        
        <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                `url( ${(props.book && props.book.imageLinks && props.book.imageLinks.smallThumbnail)? props.book.imageLinks.smallThumbnail:"" })`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={changeBookState}>
              (
              {(shelf=="" || shelf=="none")  && <option  value="none" disabled>
                Add to...
              </option>}
              {shelf!=="none" && <option a value="none" disabled>
                Move to...
              </option>}
              
              
              {shelf=="currentlyReading" && <option selected value="currentlyReading">
                -- Currently Reading
              </option> }
              {shelf !=="currentlyReading" && <option  value="currentlyReading">
                Currently Reading
              </option> }
              {shelf=="wantToRead" && <option selected value="wantToRead">--Want to Read</option>}
              {shelf!=="wantToRead" && <option  value="wantToRead" >Want to Read</option>}
              {shelf=="read" && <option selected value="read">--Read</option>}
              {shelf!=="read" && <option  value="read">Read</option>}
              {shelf !=="none" && <option  value="none">None</option>}
              )
              
            </select>
          </div>
        </div>
        <div className="book-title">{(props.book.title)? props.book.title:""}</div>
        <div className="book-authors">{(props.book.authors)? props.book.authors:""}</div>
      </div>
         
    
      </div>
     
       
    );
}
export default Book
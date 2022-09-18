import React,{Component,useState,useEffect} from "react"
import { get, getAll } from "../BooksAPI";
function Book(props){
    // const [books,setBook]=useState([]);
    // const intial = async ()=>{
    //     setBook(await getAll());
    // }
    // intial();
    // alert(Object.keys(books[0]))
    // alert(JSON.stringify(books[0]));
    const changeBookState =(event)=>{
      props.changeState(props.book,event.target.value);
    }
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
                `url( ${props.book.imageLinks.smallThumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={changeBookState}>
              (
              {props.book.shelf=="none" && <option  value="none" disabled>
                Add to...
              </option>}
              {props.book.shelf!=="none" && <option a value="none" disabled>
                Move to...
              </option>}
              
              
              {props.book.shelf=="currentlyReading" && <option selected value="currentlyReading">
                -- Currently Reading
              </option> }
              {props.book.shelf !=="currentlyReading" && <option  value="currentlyReading">
                Currently Reading
              </option> }
              {props.book.shelf=="wantToRead" && <option selected value="wantToRead">--Want to Read</option>}
              {props.book.shelf!=="wantToRead" && <option  value="wantToRead" >Want to Read</option>}
              {props.book.shelf=="read" && <option selected value="read">--Read</option>}
              {props.book.shelf!=="read" && <option  value="read">Read</option>}
              {props.book.shelf !=="none" && <option  value="none">None</option>}
              )
              
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors}</div>
      </div>
         
    
      </div>
     
       
    );
}
export default Book
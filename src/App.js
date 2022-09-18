import "./App.css";
import { useState } from "react";
import Search from "./Components/SearchPage";
import Books from "./Components/ListPage";
import { Route,Routes } from "react-router-dom";
function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Books/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
      </Routes>
    

      
    </div>
  );
}

export default App;

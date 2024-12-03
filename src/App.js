import React, {useState} from 'react';
import Nav from "./components/nav";
import News from "./components/news";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {

  const [inputSearch, setinputSearch] = useState(null);
    const handleInput = (value)=>{
      if(value != null && value != undefined)
       {
        setinputSearch(value);
       }
    }

  
  return (
    <>
      <Router>
      <Nav handleInput = {handleInput}/>

        <Routes>
         
          <Route exact path="/"              element={<News  key="general"  country="in"   category="General" />}/>  
          <Route exact path="/search"        element={<News  key={inputSearch}  country="in"   category={inputSearch} />} />
          
          <Route exact path="/sports"        element={<News  key="sports"  country="in"   category="Sports" />} />
          <Route exact path="/entertainment" element={<News  key="entertainment" country="in"    category="Entertainment" />} />
          <Route exact path="/health"        element={<News  key="health"  country="in"   category="Health" />}  />
          <Route exact path="/politics"      element={<News  key="politics" country="in"    category="Politics" />} />
          <Route exact path="/weather"       element={<News  key="weather"  country="in"   category="Weather" />} />
          <Route exact path="/education"     element={<News  key="education" country="in"    category="Education" />} />


        </Routes>

      </Router> 

    </>
  );
}



export default App;

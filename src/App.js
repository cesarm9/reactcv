//imports each component and axios for using hooks to get the data from the API
import './App.css';
import React, {useEffect, useState} from 'react';
import Title from "./components/Title"
import Summary from "./components/Summary"
import Skills from './components/Skills';
import Experience from './components/Experience';
import Sideprojects from './components/Sideprojects';
import Education from './components/Education';
import Interests from './components/Interests';
import Courses from './components/Courses';
import Picture from './components/Picture';
import axios from 'axios';

function App() {

  //fetch function for the API
const [infodata, setinfodata] = useState();
useEffect (()=>{
const fetch = async()=>{
  axios.get("http://localhost:5000/api").then(response => {
    setinfodata(response.data);
  })
}
fetch()
},[])
  
  return(
    infodata && 
    <div className="App">
   
      <div className='Upleft'>
        {/* sends  the response of the fetch function to the components as props */}
       <Title  props = {infodata}/>
       <Summary props = {infodata}/>
       <Experience props = {infodata}/>
       <Education props = {infodata}/> 
      </div>
 

      <div className='Right'>
        <Picture  props = {infodata}/>
        <Skills props = {infodata}/>
        <Interests props = {infodata}/>
        <Courses  props = {infodata}/>
        <Sideprojects props = {infodata}/>

      </div>

    </div>

  )
}

export default App;
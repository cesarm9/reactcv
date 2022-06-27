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



//  var cvdata = {
// "name": "César Medrano",
// "location": "Valle de Santiago, Guanajuato",
// "number": "4561290529",
// "email": "medranoc217@gmail.com",
// "summary": "I have experience with linux, on premise virtual machines, and networks administration. Also i have done some programming work using Python and Javascript.",
// "skills": "Linux,  Python,  Networks,  Research skills,  Self learner,  English B2",
// "experience": [
// {
// "company": "Epam",
// "position": "Junior Systems Engineer",
// "description": "3 months GCP training"
// },
// {
// "company": "Sensanet",
// "position": "Networks and Support Engineer",
// "description": "On premise Linux VM's (Ubuntu Server and CentOs) support for several clients solutions and propietary apps. Linux services and apps monitorization and troubleshooting. Vmware based infraestructure"
// }
// ],
// "sideprojects": "Development of a weather station using arduino hardware with real time monitoring through the Blynk platform",
// "education": [
// {
// "institution": "Universidad Tecnológica del Suroeste de Guanajuato",
// "degree": "Informatin and communication technologies Engineering",
// "coursework": "web development, Processes management and Networks"
// },
// {
// "institution": "Bayonne",
// "degree": "Adminisrtator systemes et reseaux",
// "coursework": "Web development, Server management and Networks"
// }
// ],
// "interests": [
// {
// "interest": "Technology"
// },
// {
// "interest": "Art"
// },
// {
// "interest": "Music"
// },
// {
// "interest": "Videogames"
// }
// ],
// "courses": [
// {
// "course": "Linux Server Administration Course"
// },
// {
// "course": "Advanced Course on internet Networks"
// },
// {
// "course": "Introduction to the Cloud with Azure Course"
// },
// {
// "course": "Python Basic Course"
// },
// {
// "course": "Introduction to Application Deployment Course"
// },
// {
// "course": "Git and GitHub Professional Course"
// }
// ]
// }

// getData();

// const datos = (async () => {
//   await getData();
// })();

// console.log(dataGlobal);
// var data = data;
// const createRequest = function( succeed, fail) {
//   fetch("http://localhost:5000/api")
//     .then((response) => response.json())
//     .then((data) => succeed(data));
    
// };
// const parsedData = JSON.parse(data);
// console.log(parsedData)



function App() {
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
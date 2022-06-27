//import the react library
import React from 'react'
//creates the funciton courses that takes props from App.js as a parameter
function Courses({props}) {
//gets the elements in courses from the entire json received as parameter
    const course = props.courses
    return <>
    <h3>Courses</h3>
        {/* maps each of the elements in course to a an element from a list */}
          {course.map(({course}) => (
            <><li>{course}</li></>
          ))}
    </>
    
  }

  //exports component as Courses
export default Courses;
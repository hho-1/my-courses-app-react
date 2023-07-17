import { useState } from 'react'
import './App.css'
import Course from './Course'


function getRandomCourse(){
  const courseArray = ['Angular', 'Bootstrap', 'CcSharp', 'KompleWeb']
  return courseArray[Math.floor(Math.random() * courseArray.length)]
}

function App() {
  
  const [courses, setCourses] = useState([])

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()])                  //daha öncekileri gecerli tut, yeni geleni de üstüne ekle
  }
  const courseList = courses.map((course, index) => {
      return <Course key={index} courseName={course}/>
  })                
  return (
    <div className='app'>
      <button className='addButton' onClick={handleClick}>Add Course</button>
      <div className='courseList'>{courseList}</div>
      
    </div>
  )
}

export default App

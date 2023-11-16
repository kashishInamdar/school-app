import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Home.css"

function Home() {
  const [students, setStudents] = useState([])

  const loadStudents = async () =>{
    const response = await axios.get("/students")
    setStudents(response?.data?.data)
  }

  useEffect(()=>{
    loadStudents();
  }, [])

  return (
    <div>
      <h1 className='text-center'>All Students</h1>

      {
        students?.map((student, index) => {
          const {_id ,name, email, age, mobile} = student

          return (
           <div key={index}  className='student-cards' >
              <h3>{name} ({age} years old)</h3>
              <p>✉️ {email}, 📞 {mobile}</p>
              <a href={`/studentdetail/${_id}`} target='_blank'>view more</a>
           </div>
          )
        })
      }

    </div>
  )
}

export default Home
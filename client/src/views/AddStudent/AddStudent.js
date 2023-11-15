import React, {useState} from 'react'
import "./AddStudent.css"
import axios from 'axios'

function AddStudent() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [age, setAge] = useState('')

  const addStudent = async () => {
    if(!name || !email || !mobile || !age) {
      alert('Please enter all fields')
      return
    }

    const student = {
      name,
      email,
      mobile,
      age
    }

    const response = await axios.post('/student', student);

    alert(response.data.message)

    setName('')
    setEmail('')
    setMobile('')
    setAge('')
  }

  return (
    <div>
      <h1 className='text-center'>Add Student</h1>

      <form className='form-container'>

        <input type='text'
          placeholder='Name'
          className='input-box'
          value={name}
          onChange={(e)=>{
            setName(e.target.value)
          }} />

        <input type='email'
          placeholder='Email'
          className='input-box'
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }} />

        <input type='text'
          placeholder='Mobile'
          className='input-box'
          value={mobile}
          onChange={(e)=>{
            setMobile(e.target.value)
          }} />

        <input type='text'
          placeholder='Age'
          className='input-box'
          value={age}
          onChange={(e)=>{
            setAge(e.target.value)
          }} />

        <button
          type='button'
          className='add-btn'
          onClick={addStudent}
          >
            Add Student
          </button>
      </form>
    </div>
  )
}

export default AddStudent
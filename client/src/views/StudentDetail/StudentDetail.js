import React , {useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios"

function StudentDetail(){

    const [student , setStudent] = useState({})

    const { _id } = useParams()

    const loadStudent = async ()=>{
        const response = await axios.get(`/student/${_id}`);
        setStudent(response?.data?.data);

      
    }

    useEffect(()=>{
        loadStudent()
    } , [])
    return(
        <>
        <h1 className="text-center">Student Detail</h1>
        <h2 className="text-center">Student ID</h2>
        <p className="text-center">Name : {student?.name}</p>
        <p className="text-center">Age : {student?.age}</p>
        <p className="text-center">Email : {student?.email}</p>
        <p className="text-center">Mobile : {student?.mobile}</p>

        </>

    )
}

export default StudentDetail;
import express from "express"
import mongoose ,  {model , Schema } from "mongoose";

const app = express();
app.use(express.json());

const PORT = 5000;
const MONGODB_URI = "mongodb+srv://kashishofficial4690:IibIbiQcYKModSH7@igcp.5ixfneb.mongodb.net/school"

const connectMongoDB = async ()=>{
  const conn =   await mongoose.connect(MONGODB_URI)
  if(conn){
    console.log("MongoDB Connect Successfully . ")
  }
};
connectMongoDB();

const studentSchema = new Schema({
  name : String,
  age : Number ,
  mobile: Number,
  email : String,
})

const Student = model("Student" , studentSchema);

app.get("/health", (req , res)=>{
  res.json({ status : "All good , All set !"})
})

// ======= GET Students

app.get("/students" , (req , res)=>{
  res.json({
    success : true , 
    data : students ,
    massage : "successfullt fetched all students" , 
  })
});

//  ======= Post Student
app.post('/student', async (req, res) => {
    const {name, age, mobile, email} = req.body;

    if (!name) {
    return res.json({
      success: false,
      message: "name is required",
    });
  }

  if (!age) {
    return res.json({
      success: false,
      message: "age is required",
    });
  }

  if (!mobile) {
    return res.json({
      success: false,
      message: "mobile is required",
    });
  }

  if (!email) {
    return res.json({
      success: false,
      message: "email is required",
    });
  }


   const stud = new Student({
    name : name , 
    age : age,
    mobile : mobile ,
    email: email,
   })

   const savedStudent = await stud.save();

    res.json({
        success: true,
        data: savedStudent,
        message: "Successfully added a new student"
    });
})

//  ========= GET Student

app.get("/student" , (req , res)=>{
  const {id} = req.query;

  let student = null ;

  students.forEach((stud)=>{
      if(stud.id == id){
        student = stud;
      }
  })

  if(student == null){
    return res.json({
      success : false,
      massage : "Student not found"
    })
  }

  res.json({
    success : true,
    data : student , 
    massage : "Successfully fetched student",
  })
})

app.listen(PORT ,()=>{
    console.log(`Server is runing on port ${PORT} .`);
})


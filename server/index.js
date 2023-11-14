import express from "express"
import mongoose ,  {model , Schema } from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const app = express();
app.use(express.json());

const PORT = 5000;

const connectMongoDB = async ()=>{
  const conn =   await mongoose.connect(process.env.MONGODB_URI)
  if(conn){
    console.log("MongoDB Connect Successfully . ")
  }
};
connectMongoDB();

const studentSchema = new Schema({
  name : String,
  age : Number ,
  mobile: Number,
  email : {
    type : String,
  },
})

const Student = model("Student" , studentSchema);

app.get("/health", (req , res)=>{
  res.json({ status : "All good , All set !"})
})

// ======= GET Students

app.get("/students" , async (req , res)=>{
  const students = await Student.find()

  res.json({
    success : true , 
    data : students ,
    massage : "successfull fetched all students" , 
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

app.get("/student" , async (req , res)=>{
  const {email} = req.query;
    const student = await Student.findOne({email : email})

  res.json({
    success : true,
    data : student , 
    massage : "Successfully fetched student",
  })
})

//  ========== Delete ===========

app.delete("/student/:id" , (req , res)=>{
    const {id} = req.params;
    const student = Student.findById(id);
    Student.deleteOne({id:id})
})




app.listen(PORT ,()=>{
    console.log(`Server is runing on port ${PORT} .`);
})


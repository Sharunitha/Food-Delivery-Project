import AdminModel from "../models/AdminModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const createToken = (id) => {
    return jwt.sign({ id }, process.env.ADMIN_JWT_SECRET);
  };

  //register admin
  const registerAdmin=async(req,res)=>{
    try{
        const adminCount=await AdminModel.countDocuments()
        if(adminCount===0){
            //hash password
            const salt = await bcrypt.genSalt(10);
            const hashPassword=await bcrypt.hash('admin@1234',salt)


            const newAdmin=new AdminModel({
                name:"Sharunitha",
                email:"shar1@gmail.com",
                password:hashPassword
            })

            const admin=await newAdmin.save(); 
            console.log('account created');
        }else{
            console.log('account already existed')
        }
    }catch(err){
        console.log('error',err)
    }
}

//login admin
const loginAdmin=async(req,res)=>{
    const { email, password } = req.body;
    try {
      const admin = await AdminModel.findOne({ email });
      if (!admin) {
        return res.json({ success: false, message: "Admin Doesn't exist" });
      }
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
        return res.json({ success: false, message: "Invalid credentials" });
      }
      const token = createToken(admin._id);
      res.json({ success: true, token });
    } catch (error) {
      console.error(error);
      res.json({ success: false, message: "Error" });
    }
}

 export{registerAdmin,loginAdmin}
import bcrypt from 'bcryptjs'
import Staff from "../models/staff.js";

export const staffRegister = async (req, res) => {

    try{
        const{name,email,password}=req.body;
         
        //Email Validation
        const emailvalidation = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$';
        if(!emailvalidation.test({email})) {
            return res.status(400).json({message:"Email have Mistaken"});
        }

        //Existing Staff
         const existingStaff = await Staff.findOne({email})
            if(existingStaff) {
                return res.status(400).json({message:"Staff Already Existed"});
            }
         
        //All Required
         if (!name||!email||!password){
            return res.status(400).json({message:"All fields required"});
         }

         //HashPassword
         const hashedPassword = await bcrypt.hase(password,8);

         //database
         const newStaff = new Staff({
            name,
            email,
            password:hashedPassword
         });
         
         const saveData = await newStaff.save();
         return res.status(200).json({message:"Sucessfully Saved"});

    } catch(err){
        console.log("Error Saving Staff",err)
    }
};




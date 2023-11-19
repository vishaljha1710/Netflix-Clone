import mongoose from "mongoose";

const conntodb=async()=>{
    try{
       await mongoose.connect('mongodb+srv://romanvkj2001:vishal2001@cluster0.gpzkhpv.mongodb.net/?retryWrites=true&w=majority');
       console.log("Database connection successfull");
    }
    catch(e){
        console.log(e);
    }
}

export default conntodb;
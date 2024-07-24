import mongoose, { mongo } from "mongoose";
const connectdb = async()=>{
    try{
        const conn = await mongoose.connect(`mongodb://127.0.0.1:27017/chai`,{
            useNewUrlParser: true
        })
        console.log(`mongo connected : ${conn.connection.host}`);

    }catch(error){
        console.error(error.message);
        process.exit(1)
    }
}
export default connectdb;
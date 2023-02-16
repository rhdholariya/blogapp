import mongoose from 'mongoose'
const MONGODB_URI = "mongodb+srv://avadhsblodapp:avadh1234@cluster0.zmnz45t.mongodb.net/?retryWrites=true&w=majority"
const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

const dbConnect  = async ()=>{
    mongoose.set('strictQuery', true)
    mongoose.connect(MONGODB_URI,opts)
    .then(()=>console.log("connected"))
    .catch((err)=>console.log(err))
}

export default dbConnect;
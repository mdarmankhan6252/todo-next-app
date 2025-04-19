import { mongoose } from "mongoose"

export const ConnectDB = async () =>{
   await mongoose.connect('mongodb+srv://todo-next-app:Eu4mQCn3WJo5cdw3@cluster0.ewhtdrn.mongodb.net/todo-app')
   console.log('DB Connected!')

}
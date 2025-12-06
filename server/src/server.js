import app from "./app.js";
import dotenv from 'dotenv'
import connectDB from "./config/db.js";

dotenv.config()
connectDB()

const port = process.env.PORT

app.listen((port),()=>{
    console.log(`Server is listening at http://localhost:${port}`)
})

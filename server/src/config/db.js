import moongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const mongoDbURL = process.env.MONGO_DB_URL

const connectDB = async() =>{
    try {
        await moongoose.connect(mongoDbURL)
        console.log("MongoDB is connected successfully !")

    } catch (error) {
        console.log("Error :", error.message)
    }
}
export default connectDB
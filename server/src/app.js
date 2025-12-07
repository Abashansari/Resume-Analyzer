import express from "express"
import userRouter from "./routes/userRoutes.js"
import resumeRouter from "./routes/resumeRoutes.js"

const app = express()

app.use(express.json())
app.use('/uploads', express.static('uploads'))

app.use('/user', userRouter)
app.use('/resume', resumeRouter)

export default app
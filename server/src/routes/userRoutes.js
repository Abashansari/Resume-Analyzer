import express from "express"
import addUser from "../controllers/addUser.js"
import getUser from "../controllers/getUser.js"

const userRouter = express.Router()

userRouter.post('/addUser', addUser)
userRouter.get('/getUser', getUser)

export default userRouter
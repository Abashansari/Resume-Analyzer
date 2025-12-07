import express from "express"
import addUser from "../controllers/user/addUser.js"
import login from "../controllers/user/login.js"
import getUser from "../controllers/user/getUser.js"
import userAuth from "../middleware/authMiddleware.js"


const userRouter = express.Router()

userRouter.post('/addUser', addUser)
userRouter.post('/login', login)
userRouter.get('/getUser', userAuth, getUser)

export default userRouter
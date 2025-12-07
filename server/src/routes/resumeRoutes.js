import express from "express"
import uploads from "../middleware/uploadMiddleware.js"
import uploadResume from "../controllers/resume/uploadResume.js"
import getResume from "../controllers/resume/getResume.js"

const resumeRouter = express.Router()

resumeRouter.post('/uploadResume', uploads.static('resume'), uploadResume)
resumeRouter.get('/getResume', getResume)

export default resumeRouter
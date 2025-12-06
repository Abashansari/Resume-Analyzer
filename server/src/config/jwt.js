import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const userAuth = async (req, res, next) => {
    try {
        const { token } = req.header

        if (!token) {
            res.status(401).json({ message: "Token is required" })
        }
        const userId = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = userId

        next()

    } catch (error) {
        console.log("error :", error.message)
    }
}
export default userAuth
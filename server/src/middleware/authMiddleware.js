//JWT protect routes
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const userAuth = async (req, res, next) => {
        const authToken = req.header('auth-token')

        if (!authToken) {
          return res.status(401).json({ message: "Token is required" })
        }
        try{
        const decodeId = jwt.verify(authToken, process.env.JWT_SECRET)
        req.userId = decodeId.id
        
       if (!req.userId) {
            return res.status(401).json({ message: "User ID missing in token" })
        }
        next()

    } catch (error) {
        console.log("error :", error.message)
    }
}
export default userAuth
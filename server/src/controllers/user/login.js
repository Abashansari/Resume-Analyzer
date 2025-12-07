import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import User from '../../models/userSchema.js'



dotenv.config()

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email) {
            res.status(401).json({ message: "Email is required !" })
        }

        const user = await User.findOne({email})
        if (!user) {
          return res.status(401).json({ message: "user with this email NOT exist" })
        }

        const compairPassword = await bcrypt.compare(password, user.password)
        if (!compairPassword) {
           return res.status(401).json({ message: "Invalid password !" })
        }

        const authToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.json({ message: "sucessfully login", token: authToken })

        if (!authToken) {
           return res.status(403).json({ message: "Invalid token" })
        }

    } catch (error) {
        res.status(500).json({ error: "Fail to generate token" })
        console.log("Error :", error.message)
    }
}
export default login
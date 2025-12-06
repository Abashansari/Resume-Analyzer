import User from "../models/UserSchema.js"
import bcrypt from 'bcrypt'

const addUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const salt = Number(process.env.SALT_ROUNDS)
        const hashedPassword = bcrypt.hash(password, salt)

        const user = new User({
            name,
            email,
            password: hashedPassword
        })
        await user.save()
        res.status(201).json({ message: "User successfully added !" })
        console.log(user)

    } catch (error) {
        res.status(500).json({ error: "fail to add user" })
        console.log("error :", error.message);
    }
}
export default addUser
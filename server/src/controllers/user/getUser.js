import User from "../../models/userSchema.js"

const getUser = async (req, res) => {
    try {
        const userId = req.userId

        const user = await User.findById(userId)

        if (!user) {
            res.status(401).json({ message: "User not exist" })
        }
        res.status(200).json({ message: "fetched user successfully", user })
        console.log(user)
    } catch (error) {
        res.status(500).json({ message: "Fail to fetch user" })
        console.log("Error :", error.message)
    }
}
export default getUser
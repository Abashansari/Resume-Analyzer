import fs from 'fs'
import mammoth from 'mammoth'

const extractDocxText = async (filepath) => {
    try {
        const buffer = fs.readFileSync(filepath)
        const data = await mammoth.extractRawText({ buffer })
        console.log(data)
        return data.value

    } catch (error) {
        console.log("Fail to extract :", error.message)
    }
}
export default extractDocxText
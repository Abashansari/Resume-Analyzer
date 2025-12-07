import fs from 'fs'
import pdfParse from 'pdf-parse'

const extractPdfText = async (filepath) => {
    try {
        const buffer = fs.readFileSync(filepath)
        const data = await pdfParse(buffer)
        console.log(data)
        return data.text

    } catch (error) {
        console.log("Fail to parsePdf :", error.message)
    }
}
export default extractPdfText


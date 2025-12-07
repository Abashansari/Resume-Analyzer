import path from 'path'
import Resume from "../../models/ResumeSchema.js"
import extractPdfText from '../../services/resumeParser/extractPdfText.js'
import extractDocxText from '../../services/resumeParser/extractDocxText.js'


const uploadResume = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "File needs to be uploaded !" })
        }

        const filepath = path.resolve(req.file.path)
        const extsion = path.extname(filepath).toLocaleLowerCase()

        let extractedText = ""

        if (extsion === '.pdf') {
            extractedText = await extractPdfText(filepath)
        }
        else if (extsion === '.docx') {
            extractedText = await extractDocxText(filepath)
        } else {
            res.status(400).json({ message: "Unsupported file" })
        }

        const resume = new Resume({
            userId: req.body.userId || null,
            file: req.file.filename,
            extractedText
        })
        await resume.save()
        res.status(201).json({ message: "File has Uploaded and extracted", resumeId: resume._id, preview: extractedText.slice(0, 50) })
        console.log(resume)

    } catch (error) {
        res.status(500).json({ error: "fail to upload file" })
        console.log("Error :", error.message)
    }
}
export default uploadResume
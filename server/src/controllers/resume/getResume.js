import Resume from "../../models/ResumeSchema"

const getResume = async (req, res) => {
    try {
        const { resumeId } = req.params
        const resume = await Resume.findById(resumeId)

        if (!resume) {
            res.status(404).json({ message: "Resume not Found !" })
        }
        res.status(200).json({ message: "fetched resume successfully !" })
        console.log(resume)
    } catch (error) {
        res.status(500).json({ error: "Fail to get resume" })
        console.log("Error :", error.message)
    }
}
export default getResume
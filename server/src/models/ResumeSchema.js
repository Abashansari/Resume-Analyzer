import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    file: {
        type: String,
        require: true
    },
    extractedText: {
        type: String,
        require: true
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    }
})
export default mongoose.model('Resume', resumeSchema)
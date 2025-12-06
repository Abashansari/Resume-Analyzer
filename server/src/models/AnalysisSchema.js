import mongoose from "mongoose";

const analyzerSchema = new mongoose.Schema({
    resumeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resume"
    },
    atsScore: {
        type: Number
    },
    summary: {
        type: String
    },
    strengths: {
        type: [String]
    },
    weaknesses: {
         type: [String] 
        },

    skillGap: {
         type: [String] 
        },
    suggestions: { 
        type: String 
    },

    rawAIResponse: {
         type: String 
        }, // full Ollama output

    createdAt: { type: Date, default: Date.now }
})
export default mongoose.model('Analysis', analyzerSchema)
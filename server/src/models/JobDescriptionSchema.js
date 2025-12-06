import mongoose from "mongoose"

const JobSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});
const JobDescription = mongoose.model("JobDescription", JobSchema)

export default JobDescription

import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    resumeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resume"
    },

    messages: [
        {
            role: { type: String, enum: ["user", "assistant"], required: true },
            content: { type: String, required: true },
            timestamp: { type: Date, default: Date.now }
        }
    ],

    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Chat", ChatSchema);

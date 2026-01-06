import { getLLMReply } from "../services/llmservices.js";

export const handleChat = async(req,res) =>{
    try {
    const {message} = req.body;

    if(!message)
    {
        return res.status(400).json({error:"Message Required"});
    }

    const reply = await getLLMReply(message);

    res.json({ reply });
    } catch (err) {

    console.error(err);
        res.status(500).json({
        reply: "Model is Loading, Please try again later after sometime.",
        });
    }
};
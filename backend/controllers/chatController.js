export const handleChat = async(req,res) =>{
    const {message} = req.body;

    if(!message)
    {
        return req.status(400).json({error:"Message Required"});
    }


    //temp reply
    const reply = `You said: ${message}`;

    res.json({reply});
}
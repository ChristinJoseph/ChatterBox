import React, { useState, useEffect, useRef } from "react";

const Chat = () => {

    const [messages,setMessages]= useState([
        { role: "bot", text: "Hello 👋 How can I help you?" }
    ]);
    const [input, setInput] = useState("");
    const bottomRef = useRef(null);

    const sendMessage = () =>{
        if(!input.trim()) return;

        setMessages((prev)=>[
            ...prev,
            { role: "user",text:input}
        ]);

        setInput("");
    };

    useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
    const last = messages[messages.length - 1];
    if (!last || last.role !== "user") return;

    setTimeout(() => {
        setMessages((prev) => [
        ...prev,
        { role: "bot", text: "🤖 :Hi, Please wait I'm being Developed" }
        ]);
    }, 600);
    }, [messages]);

  return (
    <div className='min-h-screen flex flex-col'>

      <header className='py-6 border-b border-[#1a396f] text-left shadow-md flex items-center'>
        <img 
        src="src\assets\bot1.png" 
        alt="ChatterBot Logo" 
        className="w-12 h-12 mx-4 inline-block align-middle"
        />
      <h1 className="font-['Outfit'] font-extrabold text-3xl text-[#1a396f] px-1 py-2">
        ChatterBot
      </h1>
      </header>
      
        <main className="flex-1 px-6 py-4 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-4">
        {messages.map((msg, index) => (
            <div
            key={index}
            className={`max-w-md p-3 rounded-lg ${
                msg.role === "user"
                ? "ml-auto bg-[#1a396f] text-white"
                : "bg-[#b1bbc7]"
            }`}
            >
            <p>{msg.text}</p>
            </div>
        ))}
        <div ref={bottomRef} />
        </div>
      </main>

      <footer className="border-t border-[#1a396f] p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex gap-3">
            <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e)=> e.key ==="Enter" && sendMessage()}
            placeholder = "Type your Message..."
            className='flex-1 px-4 py-2 rounded-md outline-none bg-[#b1bbc7] placeholder:text-gray-800 text-gray-900'>
            </input>
            <button 
            onClick ={sendMessage}
            className="px-5 py-2 rounded-md bg-[#b1bbc7] text-gray-800 font-semibold active:scale-95 transition-transform ">
            Send
          </button>
        </div>

      </footer>
      

    </div>
  )
}

export default Chat

import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import ReactMarkdown from "react-markdown";


const Chat = () => {

    const [messages,setMessages]= useState([
        { role: "bot", text: "Hello 👋 How can I help you?" }
    ]);
    const [input, setInput] = useState("");
    const bottomRef = useRef(null);
    const [autoScroll, setAutoScroll] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage =async () =>{
        if(!input.trim()|| isLoading) return;

        const userText = input;

        setMessages((prev)=>[
            ...prev,
            { role: "user",text:input}
        ]);

        setInput("");
        setIsLoading(true);

          try {
                const res = await fetch("http://localhost:5000/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userText }),
          });

          const data = await res.json();

              setMessages((prev) => [
                ...prev,
                { role: "bot", text: data.reply }
              ]);
            } catch (err) {
              setMessages((prev) => [
                ...prev,
                { role: "bot", text: "Server Issue, Please Try Again ❌" }
              ]);
            }finally {
             setIsLoading(false);
            }
    };

    useEffect(() => {
    if (autoScroll) {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    }, [messages, autoScroll]);


  return (
    <div className='h-screen flex overflow-hidden'>
      <Sidebar />
      <div className="flex-1 flex flex-col">
      <header className='py-10 border-[#1a396f] text-left flex items-center'>
        {/* <img 
        src="src\assets\bot2.png" 
        alt="ChatterBot Logo" 
        className="w-12 h-12 mx-4 inline-block align-middle"
        />
      <h1 className="font-['Outfit'] font-extrabold text-3xl text-[#f9e9da] px-1 py-2">
        ChatterBot
      </h1> */}
      </header>
      
        <main 
        className="flex-1 px-6 py-4 overflow-y-auto"
        onScroll={(e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;

        // Are we close to the bottom?
        const isNearBottom =
        scrollHeight - scrollTop - clientHeight < 50;

        setAutoScroll(isNearBottom);
        }}
        >
        <div className="max-w-4xl mx-auto space-y-4">
        {messages.map((msg, index) => (
            <div
            key={index}
            className={`max-w-md p-3 rounded-lg shadow-sm transition-all duration-200 ease-out max-w-[70%] hover:-translate-y-[1px]  ${
                msg.role === "user"
                ? "ml-auto bg-[#c3d8c5] text-[#272727]"
                : "bg-[#7a8450] text-[#f9e9da]"
            }`}
            >
            <div className="prose prose-sm max-w-none leading-relaxed font-['Rubik']">
            <ReactMarkdown>
              {msg.text}
            </ReactMarkdown>
          </div>

            </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-[#7a8450] px-4 py-2 rounded-lg shadow-sm">
              <span className="animate-pulse">Thinking...</span>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
        </div>
      </main>

      <footer className="x border-[#1a396f] p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex gap-3">
            <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e)=> e.key ==="Enter" && sendMessage()}
            placeholder = "Type your Message..."
            disabled={isLoading}
            className='flex-1 px-4 py-2 rounded-md outline-none bg-[#f9e9da] placeholder:text-gray-800 text-gray-900'>
            </input>
            <button 
            onClick ={sendMessage}
            disabled={isLoading}
            className="px-5 py-2 rounded-md bg-[#f9e9da] text-gray-800 font-semibold active:scale-95 transition-transform ">
            Send
          </button>
        </div>

      </footer>
      </div>

    </div>
  )
}

export default Chat

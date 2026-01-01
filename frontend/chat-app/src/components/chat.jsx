import React from 'react'

const chat = () => {
  return (
    <div className='min-h-screen flex flex-col'>

      <header className='py-6 border-b border-[#414f42] text-left shadow-md '>
      <h1 className="font-['Outfit'] font-extrabold text-3xl text-[#2a3d32] px-4">
        ChatterBot
      </h1>
      </header>
      
<main className="flex-1 px-6 py-4 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-4">
          
          {/* Bot message */}
          <div className="max-w-md bg-[#e9eddf] p-3 rounded-lg">
            <p>Hello 👋 How can I help you?</p>
          </div>

          {/* User message */}
          <div className="max-w-md ml-auto bg-[#3a5a40] text-white p-3 rounded-lg">
            <p>Hey! What’s up?</p>
          </div>

        </div>
      </main>

      <footer className="border-t border-[#414f42] p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex gap-3">
            <input 
            type="text"
            placeholder = "Type your Message..."
            className='flex-1 px-4 py-2 rounded-md outline-none bg-[#2a3e33] placeholder:text-white text-white'>
            </input>
            <button className="px-5 py-2 rounded-md bg-[#2a3e33] text-white font-semibold">
            Send
          </button>
        </div>

      </footer>
      

    </div>
  )
}

export default chat

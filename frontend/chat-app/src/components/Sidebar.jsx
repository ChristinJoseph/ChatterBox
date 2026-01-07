const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#3f5548] text-[#f5f1e6] flex flex-col border-r border-black/10">
      
      {/* Logo / Title */}
      <div className="px-4 py-5 text-xl font-bold font-['Outfit'] text-2xl text-[#f9e9da] border-b border-black/10">
      <img 
        src="src\assets\bot2.png" 
        alt="ChatterBot Logo" 
        className="w-10 h-10 inline-block align-middle mr-2"
      />
        ChatterBot
      </div>

      {/* New Chat */}
      <button className="mx-4 mt-4 px-4 py-2 rounded-lg bg-[#556f5c] hover:bg-[#607c67] transition">
        + New Chat
      </button>

      {/* Chat history placeholder */}
      <div className="flex-1 mt-4 px-2 space-y-1 overflow-y-auto">
        <div className="px-3 py-2 rounded-md hover:bg-[#556f5c] cursor-pointer">
          Weather in Chennai
        </div>
        <div className="px-3 py-2 rounded-md hover:bg-[#556f5c] cursor-pointer">
          Project ideas
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 text-xs opacity-70 border-t border-black/10">
        v0.1 · Free model
      </div>
    </aside>
  );
};

export default Sidebar;

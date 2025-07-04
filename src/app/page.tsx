// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 bg-white shadow-md">
        <div className="text-lg font-bold tracking-wide">Item 1</div>
        <div className="text-lg font-medium">Item 2</div>
        <div className="text-lg font-medium">Item 3</div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-row bg-white rounded-lg shadow-lg mx-8 my-6 overflow-hidden">
        <aside className="w-1/4 bg-gray-100 p-6 border-r border-gray-200">
          <nav>
            <ul className="space-y-4">
              <li className="font-semibold text-gray-700">Sidebar</li>
              {/* Add more sidebar items here if needed */}
            </ul>
          </nav>
        </aside>
        <section className="w-3/4 p-8">
          <div className="flex flex-1 flex-col h-full">
            {/* Chat messages */}
            <div className="flex flex-col space-y-4 w-full mb-6 flex-1 overflow-y-auto">
              {/* User message bubble */}
              <div className="flex justify-end">
                <div className="max-w-xs bg-neutral-900 text-white rounded-lg px-4 py-2 shadow-md">
                  Hi there! How can I help you today?
                </div>
              </div>
              {/* Bot message bubble */}
              <div className="flex justify-start">
                <div className="max-w-xs bg-gray-200 text-gray-900 rounded-lg px-4 py-2 shadow-md">
                  Hello! I have a question about your services.
                </div>
              </div>
              {/* User message bubble */}
              <div className="flex justify-end">
                <div className="max-w-xs bg-neutral-900 text-white rounded-lg px-4 py-2 shadow-md">
                  Sure, feel free to ask me anything.
                </div>
              </div>
            </div>
            {/* Chat input area */}
            <form className="flex items-center space-x-2 w-full">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-700 transition"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between px-8 py-4 bg-white border-t border-gray-200 text-sm text-gray-600">
        <span>
          made by <span className="font-semibold">j-casimiro</span>
        </span>
        <span>&copy; 2025</span>
        <a
          href="https://github.com/j-casimiro"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline font-medium"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

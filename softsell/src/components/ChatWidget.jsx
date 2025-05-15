import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const sampleQuestions = [
    "How do I sell my license?",
    "What types of software can I resell?",
  ];
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleQuestionClick = (q) => {
    setMessages((msgs) => [...msgs, { from: "user", text: q }, { from: "bot", text: getResponse(q) }]);
  };

  const getResponse = (question) => {
    if (question.toLowerCase().includes("sell")) {
      return "To sell your license, upload the details in the contact form.";
    }
    if (question.toLowerCase().includes("software")) {
      return "You can resell Windows, Office, Adobe licenses and more.";
    }
    return "Sorry, I didn't understand that. Please contact support.";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { from: "user", text: input }, { from: "bot", text: getResponse(input) }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 z-50">
      {open && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-2 flex flex-col max-h-[400px] overflow-auto">
          <div className="mb-3 font-semibold">Chat with AI</div>
          <div className="flex-1 space-y-2 overflow-y-auto">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-lg max-w-[75%] ${
                  msg.from === "bot" ? "bg-gray-200 dark:bg-gray-700 self-start" : "bg-blue-600 text-white self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="mt-2">
            {sampleQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleQuestionClick(q)}
                className="mr-2 mb-2 text-xs bg-gray-300 dark:bg-gray-700 rounded px-2 py-1 hover:bg-gray-400 dark:hover:bg-gray-600"
              >
                {q}
              </button>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="mt-2 flex">
            <input
              type="text"
              placeholder="Ask a question..."
              className="flex-1 rounded-l border border-gray-300 dark:border-gray-600 p-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-r px-4 hover:bg-blue-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700"
        aria-label="Toggle chat widget"
      >
        {open ? "Close" : "Chat"}
      </button>
    </div>
  );
}

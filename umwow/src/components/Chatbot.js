import { useState } from "react";
import "../styles/Chatbot.css";  // Import the CSS file for styles

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]); // Store chat messages
  const [userMessage, setUserMessage] = useState(""); // User's current input

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (!userMessage) return; // Do nothing if the message is empty

    // Add user message to the chat
    setMessages([...messages, { sender: "user", content: userMessage }]);
    setUserMessage(""); // Clear the input field

    try {
      // Send the user message to the backend API (e.g., /api/chatbot)
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      
      if (response.ok) {
        // Add bot's reply to the chat
        setMessages([...messages, { sender: "user", content: userMessage }, { sender: "bot", content: data.reply }]);
      } else {
        // Handle error (e.g., if OpenAI API fails)
        setMessages([...messages, { sender: "user", content: userMessage }, { sender: "bot", content: "Sorry, something went wrong." }]);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages([...messages, { sender: "user", content: userMessage }, { sender: "bot", content: "Failed to fetch response." }]);
    }
  };

  return (
    <>
      <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
        <div className="chatbot-header">
          <h3>Chat with Us!</h3>
        </div>

        <div className="chatbot-body">
          {/* Display chat messages */}
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender}>
                {msg.content}
              </div>
            ))}
          </div>

          {/* Message input and send button */}
          <div className="chatbot-input">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>

        <button className="chatbot-close" onClick={toggleChatbot}>
          &times;
        </button>
      </div>

      {/* Toggle Chatbot Button */}
      <button className="chatbot-toggle" onClick={toggleChatbot}>
        Chat
      </button>
    </>
  );
};

export default Chatbot;

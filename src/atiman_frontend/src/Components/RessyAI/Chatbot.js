// Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css'; // Optional: Create a CSS file for styling

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add user message to the chat
    setMessages([...messages, { text: input, type: 'user' }]);
    
    try {
      // Make a request to the OpenAI API
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo', // or your preferred model
        messages: [{ role: 'user', content: input }],
      }, {
        headers: {
          'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
          'Content-Type': 'application/json',
        }
      });

      // Add bot response to the chat
      setMessages([...messages, { text: input, type: 'user' }, { text: response.data.choices[0].message.content, type: 'bot' }]);
      setInput('');
    } catch (error) {
      console.error('Error fetching response from OpenAI:', error);
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot__messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chatbot__message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chatbot__input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;

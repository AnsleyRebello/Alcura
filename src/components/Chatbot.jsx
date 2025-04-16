import { useState } from 'react';
import { getChatbotResponse } from '../api/healthApi';
import MessageList from './MessageList';
import InputBox from './InputBox';

function Chatbot() {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist with your health today?', sender: 'bot' },
  ]);

  const sendMessage = async (messageText) => {
    const newMessage = { text: messageText, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      const response = await getChatbotResponse(messageText);
      const botReply = { text: response.reply, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botReply]);
    } catch (error) {
      console.error('Error getting chatbot response:', error);
    }
  };

  return (
    <div>
      <MessageList messages={messages} />
      <InputBox onSend={sendMessage} />
    </div>
  );
}

export default Chatbot;

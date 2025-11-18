'use client';
import { useState, useRef, useEffect, FormEvent } from 'react';
import { runWorkflow } from './chatbot'; // Import the chatbot workflow

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const ChatButton = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const result = await runWorkflow({ input_as_text: input });
      const botMessage: Message = { text: result.output_text, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      const errorMessage: Message = { text: 'Sorry, I am having trouble understanding right now. Please try again later.', sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        className="bg-secondary text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
      >
        {/* Chat Icon */}
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {isPopoverOpen && (
        <div className="absolute bottom-20 right-0 w-80 md:w-[400px] h-96 bg-light-bg rounded-lg shadow-xl flex flex-col">
          <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">JoinQuran Chatbot</h3>
            <button onClick={() => setIsPopoverOpen(false)} className="text-white">
              &times;
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ maxHeight: 'calc(100% - 100px)' }}> {/* Adjust height dynamically */}
            <div className="flex justify-start">
              <div className="bg-primary text-white p-3 rounded-lg max-w-[75%]">
                <p className="text-sm">Assalamualykum! How can I help you today?</p>
              </div>
            </div>
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`${message.sender === 'user' ? 'bg-secondary text-white' : 'bg-primary text-white'} p-3 rounded-lg max-w-[75%]`}>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-primary text-white p-3 rounded-lg max-w-[75%]">
                  <p className="text-sm">Typing...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Ask me anything..."
              disabled={isLoading}
            />
            <button type="submit" className="hidden" disabled={isLoading}>Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatButton;
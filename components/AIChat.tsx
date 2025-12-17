import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { getMechanicAdvice } from '../services/geminiService';
import { ChatMessage, DiagnosticStatus } from '../types';

const AIChat: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: '¡Hola! Soy el asistente virtual de EH Mecánica. ¿Escuchas algún ruido extraño o tienes algún problema con tu auto? Descríbemelo y trataré de ayudarte.',
      timestamp: new Date()
    }
  ]);
  const [status, setStatus] = useState<DiagnosticStatus>(DiagnosticStatus.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || status === DiagnosticStatus.LOADING) return;

    const userText = input;
    setInput('');
    
    // Add User Message
    const newUserMsg: ChatMessage = {
      role: 'user',
      text: userText,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newUserMsg]);
    setStatus(DiagnosticStatus.LOADING);

    // Call API
    const advice = await getMechanicAdvice(userText);

    // Add Model Message
    const newModelMsg: ChatMessage = {
      role: 'model',
      text: advice,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newModelMsg]);
    setStatus(DiagnosticStatus.SUCCESS);
  };

  return (
    <div id="ai-assistant" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
             <Sparkles className="text-brand-accent h-6 w-6" />
             <h2 className="text-base text-brand-primary font-semibold tracking-wide uppercase">Asistente Virtual IA</h2>
          </div>
          <p className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900">
            ¿Tu auto hace ruidos extraños?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Pregúntale a nuestro asistente inteligente potenciado por Gemini para obtener una orientación preliminar antes de tu visita.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col h-[500px]">
          {/* Chat Header */}
          <div className="bg-brand-dark p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-full">
                <Bot className="text-white h-6 w-6" />
              </div>
              <div>
                <h3 className="text-white font-medium">Mecánico Virtual EH</h3>
                <p className="text-blue-200 text-xs">Potenciado por Google Gemini</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-[80%] gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                    msg.role === 'user' ? 'bg-brand-primary' : 'bg-gray-600'
                  }`}>
                    {msg.role === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
                  </div>
                  <div
                    className={`p-3 rounded-lg text-sm ${
                      msg.role === 'user'
                        ? 'bg-brand-primary text-white rounded-br-none'
                        : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                    <span className={`text-[10px] block mt-1 opacity-70 ${msg.role === 'user' ? 'text-blue-100' : 'text-gray-400'}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {status === DiagnosticStatus.LOADING && (
               <div className="flex w-full justify-start">
                  <div className="flex max-w-[80%] gap-2">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center">
                       <Bot size={16} className="text-white" />
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-gray-200 rounded-bl-none shadow-sm flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin text-brand-primary" />
                      <span className="text-sm text-gray-500">Analizando síntomas...</span>
                    </div>
                  </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ej: Mi auto rechina al frenar..."
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm"
                disabled={status === DiagnosticStatus.LOADING}
              />
              <button
                type="submit"
                disabled={status === DiagnosticStatus.LOADING || !input.trim()}
                className="bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              * La IA ofrece orientación, no diagnósticos definitivos. Visita nuestro taller para seguridad.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AIChat;

import React, { useState } from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';

const ChatWithMe = () => {
  const [message, setMessage] = useState('');
  const [chatMode, setChatMode] = useState('whatsapp'); // 'whatsapp' or 'linkedin'

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const encodedMessage = encodeURIComponent(message);
    
    if (chatMode === 'whatsapp') {
      window.open(`https://wa.me/9121429127?text=${encodedMessage}`, '_blank');
    } else {
      // LinkedIn messaging (opens LinkedIn profile)
      window.open('https://www.linkedin.com/in/dhamoji-ajayraj-kattina/', '_blank');
    }
    
    setMessage('');
  };

  const quickMessages = [
    "Hi Ajay! I saw your portfolio and I'm impressed!",
    "I'd like to discuss a project opportunity with you.",
    "Can we schedule a call to talk about collaboration?",
    "Your projects look amazing! Let's connect.",
    "I have some questions about your development approach."
  ];

  return (
    <section id="chat" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Let's <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg">
              Have a project in mind? Want to collaborate? Or just want to say hi? Drop me a message!
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 relative overflow-hidden">
            {/* Floating message bubbles animation */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 left-4 w-6 h-6 bg-blue-500/30 rounded-full animate-bounce"></div>
              <div className="absolute top-8 right-8 w-4 h-4 bg-purple-500/30 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute bottom-8 left-8 w-5 h-5 bg-pink-500/30 rounded-full animate-bounce delay-2000"></div>
            </div>

            <div className="relative z-10">
              {/* Platform toggle */}
              <div className="flex justify-center mb-8">
                <div className="bg-white/10 rounded-2xl p-2 border border-white/20">
                  <button
                    onClick={() => setChatMode('whatsapp')}
                    className={`interactive px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      chatMode === 'whatsapp'
                        ? 'bg-green-500 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    💬 WhatsApp
                  </button>
                  <button
                    onClick={() => setChatMode('linkedin')}
                    className={`interactive px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      chatMode === 'linkedin'
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    💼 LinkedIn
                  </button>
                </div>
              </div>

              {/* Quick message suggestions */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4 text-center">
                  Quick Message Templates
                </h3>
                <div className="grid gap-3">
                  {quickMessages.map((quickMsg, index) => (
                    <button
                      key={index}
                      onClick={() => setMessage(quickMsg)}
                      className="interactive text-left p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-purple-500/50 text-gray-300 hover:text-white transition-all duration-300"
                    >
                      "{quickMsg}"
                    </button>
                  ))}
                </div>
              </div>

              {/* Message input */}
              <div className="space-y-4">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here... I'd love to hear from you!"
                  className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                  rows="4"
                />

                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <button
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="interactive flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                  >
                    <MessageSquare size={20} />
                    Send via {chatMode === 'whatsapp' ? 'WhatsApp' : 'LinkedIn'}
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>

              {/* Contact info */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="grid sm:grid-cols-2 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl">📱</div>
                    <div className="text-white font-semibold">WhatsApp</div>
                    <div className="text-gray-300">+91 9121429127</div>
                    <div className="text-sm text-gray-400">Quick responses</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl">💼</div>
                    <div className="text-white font-semibold">LinkedIn</div>
                    <div className="text-gray-300">Professional Network</div>
                    <div className="text-sm text-gray-400">Connect & collaborate</div>
                  </div>
                </div>
              </div>

              {/* Fun call-to-action */}
              <div className="mt-8 text-center">
                <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-6 border border-purple-500/30">
                  <p className="text-lg text-white mb-3">
                    🚀 Ready to build something amazing together?
                  </p>
                  <p className="text-gray-300">
                    Whether it's a project, collaboration, or just a friendly chat - I'm always excited to connect with fellow developers and innovators!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatWithMe;


import React, { useState } from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';

const ChatWithMe = () => {
  const [message, setMessage] = useState('');
  const [chatMode, setChatMode] = useState('whatsapp');

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const encodedMessage = encodeURIComponent(message);
    
    if (chatMode === 'whatsapp') {
      window.open(`https://wa.me/9121429127?text=${encodedMessage}`, '_blank');
    } else {
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
    <section id="chat" className="section">
      <div className="container">
        <div className="chat-container">
          <div className="section-header">
            <h2 className="section-title">
              Let's <span style={{ background: 'linear-gradient(to right, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Connect</span>
            </h2>
            <div style={{ background: 'linear-gradient(to right, #8b5cf6, #ec4899)' }} className="section-divider"></div>
            <p className="section-subtitle">
              Have a project in mind? Want to collaborate? Or just want to say hi? Drop me a message!
            </p>
          </div>

          <div className="chat-card">
            <div className="chat-floating-elements">
              <div></div>
              <div></div>
              <div></div>
            </div>

            <div className="chat-content">
              <div className="platform-toggle">
                <div className="toggle-container">
                  <button
                    onClick={() => setChatMode('whatsapp')}
                    className={`toggle-button whatsapp ${chatMode === 'whatsapp' ? 'active' : ''}`}
                  >
                    💬 WhatsApp
                  </button>
                  <button
                    onClick={() => setChatMode('linkedin')}
                    className={`toggle-button linkedin ${chatMode === 'linkedin' ? 'active' : ''}`}
                  >
                    💼 LinkedIn
                  </button>
                </div>
              </div>

              <div className="quick-messages">
                <h3>Quick Message Templates</h3>
                <div className="messages-grid">
                  {quickMessages.map((quickMsg, index) => (
                    <button
                      key={index}
                      onClick={() => setMessage(quickMsg)}
                      className="quick-message"
                    >
                      "{quickMsg}"
                    </button>
                  ))}
                </div>
              </div>

              <div className="message-input">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here... I'd love to hear from you!"
                  className="message-textarea"
                  rows={4}
                />

                <div className="message-actions">
                  <button
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="send-button"
                  >
                    <MessageSquare size={20} />
                    Send via {chatMode === 'whatsapp' ? 'WhatsApp' : 'LinkedIn'}
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>

              <div className="contact-info">
                <div className="contact-grid">
                  <div className="contact-method">
                    <div className="contact-icon">📱</div>
                    <div className="contact-title">WhatsApp</div>
                    <div className="contact-detail">+91 9121429127</div>
                    <div className="contact-note">Quick responses</div>
                  </div>
                  <div className="contact-method">
                    <div className="contact-icon">💼</div>
                    <div className="contact-title">LinkedIn</div>
                    <div className="contact-detail">Professional Network</div>
                    <div className="contact-note">Connect & collaborate</div>
                  </div>
                </div>
              </div>

              <div className="chat-cta">
                <div className="cta-content">
                  <p>
                    🚀 Ready to build something amazing together?
                  </p>
                  <p>
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

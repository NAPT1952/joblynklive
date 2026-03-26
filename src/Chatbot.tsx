import React, { useState } from 'react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-yellow-500 text-slate-900 p-4 rounded-full shadow-lg hover:scale-105 transition"
      >
        💬
      </button>
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-900 text-white p-4">
            <h4 className="font-semibold">Joblynk.live Assistant</h4>
            <p className="text-xs text-slate-300">Connecting Talent with Opportunity</p>
          </div>
          <div className="p-4 space-y-4">
            <p className="text-sm">
              Hi! Looking for the right job support plan, or are you an employer seeking talent? I can help!
            </p>
            <a
              href="https://wa.me/919999999999?text=Hello%20Joblynk.live%2C%20I%20need%20job%20support."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-green-500 text-white py-2 rounded font-semibold hover:bg-green-600 transition"
            >
              Chat on WhatsApp
            </a>
            <div className="border-t pt-3">
              <p className="text-xs text-slate-500 mb-2">AI Assistant (Gemini Powered)</p>
              <iframe
                src="https://your-gemini-chatbot-url.com"
                className="w-full h-48 rounded border"
                title="Gemini AI Assistant"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Check if Jotform chat is loaded
    const checkJotformLoaded = setInterval(() => {
      if (window.jotformEmbedHandler) {
        setIsLoaded(true)
        clearInterval(checkJotformLoaded)
      }
    }, 100)

    return () => clearInterval(checkJotformLoaded)
  }, [])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    
    // Trigger Jotform chat when opened
    if (!isOpen && isLoaded && window.jotformEmbedHandler) {
      // The Jotform script should handle the chat display
      // You may need to adjust this based on Jotform's specific API
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full shadow-lg hover:shadow-primary-500/50 flex items-center justify-center group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle size={28} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-28 right-8 z-50 w-96 h-[500px] glass rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary-500 to-purple-500 p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Chat with me</h3>
                  <p className="text-xs text-white/80">I'll respond as soon as I can!</p>
                </div>
              </div>
            </div>

            {/* Chat Content - Jotform Embed */}
            <div className="h-[calc(100%-72px)] bg-gray-900/50 p-4 overflow-hidden">
              {isLoaded ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <MessageCircle size={48} className="text-primary-400 mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Start a Conversation</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Ask me anything about my work, projects, or let's discuss your ideas!
                  </p>
                  <div className="w-full space-y-3">
                    <button className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-left">
                      💼 Tell me about your services
                    </button>
                    <button className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-left">
                      🚀 I have a project idea
                    </button>
                    <button className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-left">
                      📧 Let's collaborate
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    Powered by Jotform
                  </p>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <div className="animate-spin w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full"></div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatWidget

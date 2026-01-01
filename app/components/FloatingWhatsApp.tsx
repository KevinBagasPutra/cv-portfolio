'use client'

import { MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function FloatingWhatsApp() {
  const [isVisible] = useState(true)
  
  const handleWhatsAppClick = () => {
    const phoneNumber = '+6289666664656'
    const message = encodeURIComponent('Hello! I visited your portfolio and would like to discuss a project.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  if (!isVisible) return null

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute right-16 bg-green-700 text-white text-sm font-medium py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </button>
  )
}
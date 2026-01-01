'use client'

// Check if running in browser
export const isBrowser = typeof window !== 'undefined'

// Safe window opener
export const safeOpenWindow = (url: string, target = '_blank') => {
  if (isBrowser) {
    window.open(url, target, 'noopener,noreferrer')
  }
}

// Copy to clipboard
export const copyToClipboard = async (text: string): Promise<boolean> => {
  if (!isBrowser || !navigator.clipboard) return false
  
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error('Failed to copy text: ', err)
    return false
  }
}

// WhatsApp utilities
export const createWhatsAppURL = (phoneNumber: string, message: string): string => {
  const cleanedNumber = phoneNumber.replace(/\D/g, '')
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${cleanedNumber}?text=${encodedMessage}`
}

// Format phone number for display
export const formatPhoneNumber = (phoneNumber: string): string => {
  const cleaned = phoneNumber.replace(/\D/g, '')
  if (cleaned.length === 12) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{6})/, '+$1 $2-$3')
  }
  return phoneNumber
}
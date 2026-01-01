'use client'

export const scrollToSection = (sectionId: string) => {
  if (typeof window === 'undefined') return
  
  const element = document.getElementById(sectionId.replace('#', ''))
  if (element) {
    const offset = 80 // Account for fixed header
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// Intersection Observer for animations
export const createObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
) => {
  if (typeof window === 'undefined') return null
  
  return new IntersectionObserver(callback, {
    threshold: 0.1,
    rootMargin: '0px',
    ...options
  })
}
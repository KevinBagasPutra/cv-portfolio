export const theme = {
  colors: {
    primary: '#3b82f6',
    primaryDark: '#2563eb',
    secondary: '#1e293b',
    secondaryLight: '#334155',
    accent: '#f59e0b',
    accentDark: '#d97706',
    background: '#f9fafb',
    card: '#ffffff',
    text: '#111827',
    textLight: '#6b7280',
    border: '#e5e7eb',
  },
  
  spacing: {
    sectionPadding: 'px-4 sm:px-6 lg:px-8 py-16 md:py-24',
    container: 'max-w-7xl mx-auto',
  },
  
  typography: {
    fontFamily: "'Inter', system-ui, sans-serif",
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    h2: 'text-3xl md:text-4xl font-bold',
    h3: 'text-2xl font-bold',
    body: 'text-gray-600',
  },
  
  shadows: {
    card: 'shadow-lg hover:shadow-xl',
    button: 'shadow-md hover:shadow-lg',
  },
  
  transitions: {
    default: 'transition-all duration-300',
    slow: 'transition-all duration-500',
  },
} as const
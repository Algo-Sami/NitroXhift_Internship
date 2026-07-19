'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

interface ThemeProviderProps {
  children: React.ReactNode
}

/**
 * ThemeProvider — Wraps next-themes with dark mode as default.
 * Placed in the root layout to provide theme context to the entire app.
 *
 * Strategy: 'class' — adds/removes 'dark' class on <html>
 * Default: 'dark'
 * System preference is detected and respected.
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  )
}

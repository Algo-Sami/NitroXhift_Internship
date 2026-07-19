'use client'

import { useTheme as useNextTheme } from 'next-themes'
import { useEffect, useState } from 'react'

/**
 * useTheme — Wraps next-themes with hydration-safe mounting check.
 *
 * Returns:
 *   - theme: current theme ('dark' | 'light' | 'system')
 *   - resolvedTheme: actual resolved theme ('dark' | 'light')
 *   - setTheme: function to change theme
 *   - toggleTheme: convenience toggle between dark and light
 *   - mounted: true once client has hydrated (use to avoid flash)
 */
export function useTheme() {
  const { theme, setTheme, resolvedTheme } = useNextTheme()
  const [mounted, setMounted] = useState(false)

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true) }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme,
    mounted,
    isDark: resolvedTheme === 'dark',
    isLight: resolvedTheme === 'light',
  }
}

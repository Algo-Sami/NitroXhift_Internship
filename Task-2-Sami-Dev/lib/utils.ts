import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * cn() — Merge Tailwind classes safely, resolving conflicts.
 * Usage: cn('px-4', condition && 'py-2', 'px-2') → 'py-2 px-2'
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Clamp a number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * Format a date string into a readable format
 */
export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
  }).format(new Date(date))
}

/**
 * Stagger delay helper — returns delay in seconds for staggered animations
 */
export function staggerDelay(index: number, base = 0.1): number {
  return index * base
}

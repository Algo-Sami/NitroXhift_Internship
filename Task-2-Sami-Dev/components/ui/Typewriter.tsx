'use client'

import { useState, useEffect } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface TypewriterProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenWords?: number
  className?: string
}

/**
 * Typewriter — A simple typing animation component for headings or text tags.
 * Cycles through a list of words, typing and deleting them letter-by-letter.
 * Automatically halts typing animations and shows static text if prefers-reduced-motion is active.
 */
export function Typewriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  delayBetweenWords = 2500,
  className,
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const isReducedMotion = useReducedMotion()

  // When reduced motion is preferred, show the current word statically
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isReducedMotion) setCurrentText(words[currentWordIndex])
  }, [isReducedMotion, words, currentWordIndex])

  useEffect(() => {
    if (isReducedMotion) return

    let timer: ReturnType<typeof setTimeout>
    const currentFullWord = words[currentWordIndex]

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1))
      }, deletingSpeed)
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) => currentFullWord.slice(0, prev.length + 1))
      }, typingSpeed)
    }

    // Word fully typed, pause before deleting
    if (!isDeleting && currentText === currentFullWord) {
      timer = setTimeout(() => {
        setIsDeleting(true)
      }, delayBetweenWords)
    }

    // Word fully deleted, advance to next word
    if (isDeleting && currentText === '') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords, isReducedMotion])

  return (
    <span className={className} aria-live="polite">
      {currentText}
      {!isReducedMotion && (
        <span
          className="ml-1 inline-block w-[3px] h-[1.1em] bg-primary animate-pulse select-none align-middle"
          aria-hidden="true"
          style={{ animationDuration: '1s' }}
        />
      )}
    </span>
  )
}

'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { springTransition } from '@/styles/animations'

// ─── Variant Definitions ──────────────────────────────────────────────────────

const buttonVariants = cva(
  // Base styles
  [
    'inline-flex items-center justify-center gap-2',
    'font-medium font-body',
    'transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'select-none cursor-pointer',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-primary text-white',
          'hover:bg-primary/90',
          'shadow-sm shadow-primary/20',
        ],
        secondary: [
          'bg-secondary text-white',
          'hover:bg-secondary/90',
          'shadow-sm shadow-secondary/20',
        ],
        outline: [
          'border border-border bg-transparent',
          'text-foreground',
          'hover:bg-muted/50',
        ],
        ghost: [
          'bg-transparent text-foreground',
          'hover:bg-muted/50',
        ],
        accent: [
          'bg-accent text-white',
          'hover:bg-accent/90',
          'shadow-sm shadow-accent/20',
        ],
      },
      size: {
        sm:   'h-8 px-3 text-xs rounded-[10px]',
        md:   'h-10 px-5 text-sm rounded-[14px]',
        lg:   'h-12 px-7 text-base rounded-[14px]',
        xl:   'h-14 px-8 text-lg rounded-[14px]',
        icon: 'h-10 w-10 rounded-[14px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

// ─── Props ────────────────────────────────────────────────────────────────────

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href: string
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

// ─── Inner content ────────────────────────────────────────────────────────────

function ButtonContent({
  loading,
  leftIcon,
  rightIcon,
  children,
}: {
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <>
      {loading ? (
        <span
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      ) : (
        leftIcon && <span className="shrink-0" aria-hidden="true">{leftIcon}</span>
      )}
      {children}
      {rightIcon && !loading && (
        <span className="shrink-0" aria-hidden="true">{rightIcon}</span>
      )}
    </>
  )
}

// ─── Button (native button element) ──────────────────────────────────────────

/**
 * Button — CVA-based button with Framer Motion hover/tap animation.
 *
 * Usage:
 *   <Button variant="primary" size="lg">Get In Touch</Button>
 *   <Button variant="outline" leftIcon={<Github />}>View GitHub</Button>
 *
 * For links, use LinkButton instead:
 *   <LinkButton href="/contact" variant="primary">Contact</LinkButton>
 */
export function Button({
  className,
  variant,
  size,
  loading = false,
  leftIcon,
  rightIcon,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={springTransition}
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      <ButtonContent loading={loading} leftIcon={leftIcon} rightIcon={rightIcon}>
        {children}
      </ButtonContent>
    </motion.button>
  )
}

// ─── LinkButton (anchor element — for internal/external links) ────────────────

/**
 * LinkButton — Same visual as Button but renders as an <a> tag.
 * Use this for navigation links (internal via Next Link, or external).
 *
 * Usage:
 *   <LinkButton href="#contact" variant="primary">Get In Touch</LinkButton>
 *   <LinkButton href="https://github.com" variant="outline" target="_blank">GitHub</LinkButton>
 */
export function LinkButton({
  className,
  variant,
  size,
  loading = false,
  leftIcon,
  rightIcon,
  children,
  href,
  ...props
}: LinkButtonProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={springTransition}
      className={cn(buttonVariants({ variant, size }), className)}
      {...(props as React.ComponentProps<typeof motion.a>)}
    >
      <ButtonContent loading={loading} leftIcon={leftIcon} rightIcon={rightIcon}>
        {children}
      </ButtonContent>
    </motion.a>
  )
}

// Re-export variants for external use
export { buttonVariants }

'use client'

import { motion } from 'framer-motion'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

// ─── Variants ─────────────────────────────────────────────────────────────────

const cardVariants = cva(
  ['relative overflow-hidden', 'transition-all duration-300'],
  {
    variants: {
      variant: {
        default: [
          'bg-card border border-border',
          'rounded-[20px]',
        ],
        glass: [
          'bg-white/5 dark:bg-white/[0.03]',
          'backdrop-blur-md',
          'border border-white/10 dark:border-white/[0.06]',
          'rounded-[20px]',
        ],
        bordered: [
          'bg-transparent',
          'border-2 border-border',
          'rounded-[20px]',
        ],
        elevated: [
          'bg-card border border-border',
          'shadow-lg shadow-black/5 dark:shadow-black/30',
          'rounded-[20px]',
        ],
      },
      hoverable: {
        true: '',
        false: '',
      },
      padding: {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
    },
    compoundVariants: [
      {
        variant: 'default',
        hoverable: true,
        className: 'hover:border-primary/30 hover:shadow-md hover:shadow-primary/5',
      },
      {
        variant: 'glass',
        hoverable: true,
        className: 'hover:bg-white/10 dark:hover:bg-white/[0.06] hover:border-white/20',
      },
      {
        variant: 'bordered',
        hoverable: true,
        className: 'hover:border-primary/50',
      },
      {
        variant: 'elevated',
        hoverable: true,
        className: 'hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/40 hover:-translate-y-0.5',
      },
    ],
    defaultVariants: {
      variant: 'default',
      hoverable: false,
      padding: 'md',
    },
  }
)

// ─── Props ────────────────────────────────────────────────────────────────────

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  animate?: boolean   // Add Framer Motion hover scale
}

/**
 * Card — Versatile card container with glass, default, bordered, and elevated variants.
 *
 * Usage:
 *   <Card variant="glass" hoverable padding="lg">...</Card>
 *   <Card variant="elevated" animate>...</Card>
 */
export function Card({
  className,
  variant,
  hoverable,
  padding,
  animate = false,
  children,
  ...props
}: CardProps) {
  if (animate) {
    return (
      <motion.div
        whileHover={{ scale: 1.01, y: -2 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className={cn(cardVariants({ variant, hoverable: true, padding }), className)}
        {...(props as React.ComponentProps<typeof motion.div>)}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div
      className={cn(cardVariants({ variant, hoverable, padding }), className)}
      {...props}
    >
      {children}
    </div>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────────

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mb-4 space-y-1', className)} {...props}>
      {children}
    </div>
  )
}

export function CardBody({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('text-muted-foreground', className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mt-4 flex items-center gap-3', className)} {...props}>
      {children}
    </div>
  )
}

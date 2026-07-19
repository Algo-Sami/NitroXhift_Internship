'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

// ─── Variants ─────────────────────────────────────────────────────────────────

const badgeVariants = cva(
  [
    'inline-flex items-center gap-1',
    'font-body font-medium',
    'transition-colors duration-200',
    'select-none',
  ],
  {
    variants: {
      variant: {
        default:   'bg-muted text-foreground border border-border',
        primary:   'bg-primary/10 text-primary border border-primary/20',
        secondary: 'bg-secondary/10 text-secondary border border-secondary/20',
        accent:    'bg-accent/10 text-accent border border-accent/20',
        success:   'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20',
        warning:   'bg-amber-500/10 text-amber-500 border border-amber-500/20',
        error:     'bg-red-500/10 text-red-500 border border-red-500/20',
        outline:   'bg-transparent text-foreground border border-border',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs rounded-full',
        md: 'px-3 py-1 text-xs rounded-full',
        lg: 'px-4 py-1.5 text-sm rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

// ─── Props ────────────────────────────────────────────────────────────────────

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean   // Show a colored dot indicator
  icon?: React.ReactNode
}

/**
 * Badge — Tag/label component for tech stack, categories, status.
 *
 * Usage:
 *   <Badge variant="primary">TypeScript</Badge>
 *   <Badge variant="success" dot>Available for hire</Badge>
 */
export function Badge({ className, variant, size, dot, icon, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {dot && (
        <span
          className={cn(
            'h-1.5 w-1.5 rounded-full',
            variant === 'success' && 'bg-emerald-500',
            variant === 'warning' && 'bg-amber-500',
            variant === 'error'   && 'bg-red-500',
            variant === 'primary' && 'bg-primary',
            variant === 'secondary' && 'bg-secondary',
            variant === 'accent'  && 'bg-accent',
            (!variant || variant === 'default' || variant === 'outline') && 'bg-foreground/50'
          )}
          aria-hidden="true"
        />
      )}
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </span>
  )
}

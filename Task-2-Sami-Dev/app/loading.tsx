export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      aria-live="polite"
      className="flex min-h-screen items-center justify-center bg-background"
    >
      {/* Animated SU monogram loader */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          {/* Outer ring */}
          <div className="h-12 w-12 animate-spin rounded-full border-2 border-border border-t-primary" />
          {/* Inner logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              aria-hidden="true"
              className="font-heading text-xs font-bold text-primary"
            >
              SU
            </span>
          </div>
        </div>
        <p className="animate-pulse text-xs text-muted-foreground">Loading…</p>
      </div>
    </div>
  )
}

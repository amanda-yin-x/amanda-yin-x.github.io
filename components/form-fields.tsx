import { cn } from "@/lib/utils";

export function Input({
  label,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="flex flex-col gap-1 text-sm font-semibold text-ink">
      {label}
      <input
        className={cn(
          "w-full rounded-xl border border-border bg-white/80 px-3 py-2 text-sm text-ink shadow-soft transition placeholder:text-muted/70 focus:border-primary/50 focus:outline-none",
          className
        )}
        {...props}
      />
    </label>
  );
}

export function Textarea({
  label,
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return (
    <label className="flex flex-col gap-1 text-sm font-semibold text-ink">
      {label}
      <textarea
        className={cn(
          "min-h-[120px] w-full rounded-xl border border-border bg-white/80 px-3 py-2 text-sm text-ink shadow-soft transition placeholder:text-muted/70 focus:border-primary/50 focus:outline-none",
          className
        )}
        {...props}
      />
    </label>
  );
}

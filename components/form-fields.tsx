import { cn } from "@/lib/utils";

export function Input({
  label,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-ink">{label}</span>
      <input
        className={cn(
          "w-full rounded-sm border border-fold bg-paper px-3 py-2.5 text-sm text-ink transition-colors placeholder:text-inkWash focus:border-tiffany focus:outline-none focus:ring-2 focus:ring-tiffany/10",
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
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-ink">{label}</span>
      <textarea
        className={cn(
          "min-h-[140px] w-full resize-y rounded-sm border border-fold bg-paper px-3 py-2.5 text-sm text-ink transition-colors placeholder:text-inkWash focus:border-tiffany focus:outline-none focus:ring-2 focus:ring-tiffany/10",
          className
        )}
        {...props}
      />
    </label>
  );
}

export default function Logo({ className = "h-10 w-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 40" className={className} role="img" aria-label="Google Developer Groups logo">
      <g strokeWidth="9" strokeLinecap="round" fill="none">
        <path d="M9 20 L24 7" stroke="#ea4335" />
        <path d="M9 20 L24 33" stroke="#4285f4" />
        <path d="M55 20 L40 7" stroke="#34a853" />
        <path d="M55 20 L40 33" stroke="#fbbc04" />
      </g>
    </svg>
  );
}
export default function Confetti() {
  return (
    <svg aria-hidden="true" width="100%" height="72" className="block">
      <defs>
        <pattern id="confetti" width="260" height="72" patternUnits="userSpaceOnUse">
          <circle cx="24" cy="46" r="14" fill="#fbbc04" />
          <rect x="52" y="30" width="28" height="42" rx="3" fill="#ea4335" transform="rotate(-18 66 51)" />
          <path d="M96 72 A24 24 0 0 1 144 72 Z" fill="#34a853" />
          <rect x="150" y="34" width="34" height="34" rx="3" fill="#4285f4" transform="rotate(20 167 51)" />
          <circle cx="204" cy="20" r="8" fill="#ea4335" />
          <path d="M214 72 A22 22 0 0 1 258 72 Z" fill="#fbbc04" />
          <rect x="112" y="8" width="14" height="14" rx="2" fill="#4285f4" transform="rotate(30 119 15)" />
          <circle cx="40" cy="12" r="6" fill="#34a853" />
        </pattern>
      </defs>
      <rect width="100%" height="72" fill="url(#confetti)" />
    </svg>
  );
}
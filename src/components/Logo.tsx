const bars = [
  { d: "M10 20 L25 7", c: "#ea4335" },
  { d: "M10 20 L25 33", c: "#4285f4" },
  { d: "M54 20 L39 7", c: "#34a853" },
  { d: "M54 20 L39 33", c: "#fbbc04" },
];

export default function Logo({
  className = "h-10 w-16",
  outlined = false,
}: {
  className?: string;
  outlined?: boolean;
}) {
  return (
    <svg viewBox="0 0 64 40" className={className} role="img" aria-label="Google Developer Groups logo">
      {outlined && (
        <g stroke="#000" strokeWidth="14" strokeLinecap="round" fill="none">
          {bars.map((b) => (
            <path key={b.c} d={b.d} />
          ))}
        </g>
      )}
      <g strokeWidth="9" strokeLinecap="round" fill="none">
        {bars.map((b) => (
          <path key={b.c} d={b.d} stroke={b.c} />
        ))}
      </g>
    </svg>
  );
}
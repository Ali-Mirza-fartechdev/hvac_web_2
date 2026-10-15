export function ReviewStars({ count = 5, size = 16 }: { count?: number; size?: number }) {
  return (
    <span className="quote-block__stars" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
        </svg>
      ))}
    </span>
  );
}

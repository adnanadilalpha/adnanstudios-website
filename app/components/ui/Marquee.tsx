'use client';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  reverse?: boolean;
}

export function Marquee({
  children,
  speed = 30,
  className = '',
  reverse = false,
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex w-max animate-marquee"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

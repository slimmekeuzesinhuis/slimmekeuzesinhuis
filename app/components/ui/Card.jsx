export default function Card({ children, className = "" }) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ title, subtitle, className = "" }) {
  return (
    <div className={`border-b p-4 ${className}`}>
      {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
      {title && <h3 className="mt-1 text-base font-semibold">{title}</h3>}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }) {
  return <div className={`border-t p-4 ${className}`}>{children}</div>;
}

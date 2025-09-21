export default function Badge({ children, color = "gray", className = "" }) {
  const map = {
    gray: "bg-gray-100 text-gray-800",
    emerald: "bg-emerald-100 text-emerald-800",
    amber: "bg-amber-100 text-amber-800",
    sky: "bg-sky-100 text-sky-800",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${map[color] ?? map.gray} ${className}`}>
      {children}
    </span>
  );
}

export default function Button({
  as = "a",
  href,
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const variants = {
    primary:
      "bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:ring-emerald-600",
    outline:
      "border border-gray-300 bg-white hover:bg-gray-50 text-gray-900 focus-visible:ring-gray-400",
    subtle: "bg-gray-100 text-gray-900 hover:bg-gray-200"
  };
  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`;

  if (as === "button") return <button className={classes} {...props}>{children}</button>;
  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}

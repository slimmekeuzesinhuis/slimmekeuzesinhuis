import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://slimmekeuzesinhuis.vercel.app"),
  title: { default: "Slimme keuzes in huis", template: "%s | Slimme keuzes in huis" },
  description: "Praktische tips en stappen om je huis comfortabeler en energiezuiniger te maken.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Slimme keuzes in huis",
    locale: "nl_NL",
    title: "Slimme keuzes in huis",
    description: "Praktische tips en stappen om je huis comfortabeler en energiezuiniger te maken."
  },
  twitter: { card: "summary_large_image", title: "Slimme keuzes in huis", description: "Praktische tips en stappen om je huis comfortabeler en energiezuiniger te maken." }
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
            <a href="/" className="font-semibold">Slimme keuzes in huis</a>
            <div className="flex gap-4 text-sm">
              <a href="/">Home</a>
              <a href="/over">Over</a>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>

        <footer className="mt-16 border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-600">
            © {new Date().getFullYear()} Slimme keuzes in huis
          </div>
        </footer>
      </body>
    </html>
  );
}

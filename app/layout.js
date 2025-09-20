import "./globals.css";

export const metadata = { title: "Slimme keuzes in huis" };

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {/* HEADER */}
        <header className="border-b bg-white">
          <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
            <a href="/" className="font-semibold">Slimme keuzes in huis</a>
            <div className="flex gap-4 text-sm">
              <a href="/" className="hover:underline">Home</a>
              <a href="/over" className="hover:underline">Over</a>
            </div>
          </nav>
        </header>

        {/* MAIN */}
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>

        {/* FOOTER */}
        <footer className="mt-16 border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-600">
            © {new Date().getFullYear()} Slimme keuzes in huis
          </div>
        </footer>
      </body>
    </html>
  );
}

import "./globals.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { getNavLinks } from "@/lib/data";     // <--

export const metadata = { /* ... blijft zoals nu ... */ };

export default async function RootLayout({ children }) {
  const navLinks = await getNavLinks();       // <--

  return (
    <html lang="nl">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          {/* geef navLinks mee aan client Header */}
          <Header links={navLinks} />         {/* <--- */}
        </header>

        <main className="container" style={{ padding: "32px 0" }}>
          {children}
        </main>

        <footer className="mt-16 border-t bg-white">
          <div className="container text-sm text-gray-600">
            © {new Date().getFullYear()} Slimme keuzes in huis
          </div>
        </footer>
      </body>
    </html>
  );
}

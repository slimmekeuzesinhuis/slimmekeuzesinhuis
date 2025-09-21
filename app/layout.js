import "./globals.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export const metadata = {
  metadataBase: new URL("https://slimmekeuzesinhuis.vercel.app"),
  title: { default: "Slimme keuzes in huis", template: "%s | Slimme keuzes in huis" },
  description:
    "Praktische tips en stappen om je huis comfortabeler en energiezuiniger te maken.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Slimme keuzes in huis",
    locale: "nl_NL",
    title: "Slimme keuzes in huis",
    description:
      "Praktische tips en stappen om je huis comfortabeler en energiezuiniger te maken."
  },
  twitter: {
    card: "summary_large_image",
    title: "Slimme keuzes in huis",
    description:
      "Praktische tips en stappen om je huis comfortabeler en energiezuiniger te maken."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

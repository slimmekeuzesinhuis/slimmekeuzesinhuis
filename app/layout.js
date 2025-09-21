import "./globals.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export const metadata = {
  metadataBase: new URL("https://slimmekeuzesinhuis.vercel.app"),
  title: {
    default: "Slimme keuzes in huis",
    template: "%s | Slimme keuzes in huis",
  },
  description:
    "Praktische tips om je huis comfortabeler en energiezuiniger te maken.",
  openGraph: {
    title: "Slimme keuzes in huis",
    description:
      "Praktische tips om je huis comfortabeler en energiezuiniger te maken.",
    url: "/",
    siteName: "Slimme keuzes in huis",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slimme keuzes in huis",
    description:
      "Praktische tips om je huis comfortabeler en energiezuiniger te maken.",
  },
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

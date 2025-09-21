export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-600">
        © {new Date().getFullYear()} Slimme keuzes in huis
      </div>
    </footer>
  );
}

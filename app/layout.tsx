import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        {/* MENU UNIQUE */}
        <header className="bg-[#0a1b3d] text-white p-6 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">Ogooue Groupe</Link>
          <nav className="flex gap-6">
            <Link href="/">Accueil</Link>
            <Link href="/a-propos">À propos</Link>
            <Link href="/secteur-activite">Secteurs</Link>
            <Link href="/actualites">Actualités</Link>
            <Link href="/contact" className="bg-blue-600 px-4 py-2 rounded">Contact</Link>
          </nav>
        </header>

        {/* CONTENU (Chaque page s'affiche ici) */}
        <main className="flex-grow">{children}</main>

        {/* FOOTER UNIQUE */}
        <footer className="bg-[#0a1b3d] text-white p-12 text-center">
          <p>© 2026 Ogooue Groupe. Tous droits réservés.</p>
        </footer>
      </body>
    </html>
  );
}
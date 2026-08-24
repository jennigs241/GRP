import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen bg-white text-gray-900">
        
        {/* HEADER / NAVIGATION RESPONSIVE */}
        <header className="bg-[#0a1b3d] text-white py-4 px-4 md:px-12 sticky top-0 z-50 shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            
            {/* LOGO + NOM */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-90 transition">
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image 
                  src="/Design sans titre.jpg" 
                  alt="Logo Ogooue" 
                  fill 
                  className="object-contain"
                />
              </div>
             
            </Link>

            {/* NAVIGATION (Adaptée et responsive pour tous les écrans) */}
            <nav className="flex items-center gap-3 sm:gap-6 md:gap-8 text-xs sm:text-sm md:text-base font-medium">
              <Link href="/" className="hover:text-blue-400 transition">Accueil</Link>
              <Link href="/a-propos" className="hidden lg:inline hover:text-blue-400 transition">À propos</Link>
              <Link href="/secteur-activite" className="hover:text-blue-400 transition">Secteurs</Link>
              <Link href="/actualites" className="hover:text-blue-400 transition">Actualités</Link>
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition shadow-sm">
                Contact
              </Link>
            </nav>

          </div>
        </header>

        {/* CONTENU PRINCIPAL (Chaque page s'affiche ici) */}
        <main className="flex-grow">{children}</main>

        {/* FOOTER */}
        <footer className="bg-[#0a1b3d] text-white py-12 px-6 text-center border-t border-blue-900">
          <div className="max-w-7xl mx-auto space-y-2">
            <p className="font-semibold text-lg">Ogooue Groupe</p>
            <p className="text-gray-400 text-sm">© 2026 Ogooue Groupe. Tous droits réservés.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}
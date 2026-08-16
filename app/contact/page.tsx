export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <section className="bg-[#0a1b3d] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-sm uppercase tracking-widest text-blue-400 font-semibold">CONTACTEZ-NOUS</span>
          <h1 className="text-4xl md:text-5xl font-bold">Bâtir l'avenir ensemble.</h1>
          <p className="text-gray-300 max-w-2xl">
            Vous avez un projet de logistique, de transformation numérique ou de conseil financier ? Nos experts sont à votre disposition pour vous accompagner dans votre croissance stratégique.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Formulaire */}
        <div className="bg-white p-8 border rounded-lg shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-[#0a1b3d]">Envoyez un message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Prénom" className="p-3 border rounded-sm w-full text-sm" />
              <input type="text" placeholder="Nom" className="p-3 border rounded-sm w-full text-sm" />
            </div>
            <input type="email" placeholder="Email Professionnel" className="p-3 border rounded-sm w-full text-sm" />
            <input type="tel" placeholder="Téléphone" className="p-3 border rounded-sm w-full text-sm" />
            <textarea placeholder="Votre Message" rows={4} className="p-3 border rounded-sm w-full text-sm"></textarea>
            <button type="submit" className="w-full bg-[#0a1b3d] text-white py-4 rounded-sm font-semibold hover:bg-blue-900 transition">
              Envoyez ma demande
            </button>
          </form>
        </div>

        {/* Coordonnées */}
        <div className="space-y-8">
          <div className="p-6 border rounded-lg bg-gray-50 space-y-4">
            <h3 className="text-xl font-bold text-[#0a1b3d]">Siège Social — Libreville, Gabon</h3>
            <p className="text-sm text-gray-600">Immeuble Horizon, Quartier des Affaires, BP 12450, Libreville</p>
            <p className="text-sm text-gray-600 font-semibold">📞 +241 01 77 00 00</p>
            <p className="text-sm text-gray-600 font-semibold">✉️ contact@ogooue-groupe.com</p>
          </div>

          <div className="p-6 bg-[#0a1b3d] text-white rounded-lg space-y-3">
            <h4 className="font-bold text-lg">Support d'urgence 24/7</h4>
            <p className="text-xs text-gray-300">Pour toute urgence opérationnelle concernant nos activités portuaires.</p>
            <p className="text-xl font-bold text-blue-400">+241 07 44 99 88</p>
          </div>
        </div>
      </section>
    </main>
  );
}
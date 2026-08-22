'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Envoi en cours...");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "36c401d1-0dba-4c27-8b25-e4a23ce2ac5d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message envoyé avec succès ! Nous vous répondrons rapidement.");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("Une erreur est survenue, veuillez réessayer.");
      }
    } catch (error) {
      setResult("Erreur de connexion, veuillez vérifier votre réseau.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="prenom" placeholder="Prénom" required className="p-3 border rounded-sm w-full text-sm outline-none focus:ring-2 focus:ring-blue-900" />
              <input type="text" name="nom" placeholder="Nom" required className="p-3 border rounded-sm w-full text-sm outline-none focus:ring-2 focus:ring-blue-900" />
            </div>
            <input type="email" name="email" placeholder="Email Professionnel" required className="p-3 border rounded-sm w-full text-sm outline-none focus:ring-2 focus:ring-blue-900" />
            <input type="tel" name="telephone" placeholder="Téléphone" className="p-3 border rounded-sm w-full text-sm outline-none focus:ring-2 focus:ring-blue-900" />
            <textarea name="message" placeholder="Votre Message" rows={4} required className="p-3 border rounded-sm w-full text-sm outline-none focus:ring-2 focus:ring-blue-900"></textarea>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#0a1b3d] text-white py-4 rounded-sm font-semibold hover:bg-blue-900 transition disabled:opacity-70"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyez ma demande"}
            </button>

            {result && (
              <p className={`text-center text-sm font-medium mt-2 ${result.includes('succès') ? 'text-green-600' : 'text-blue-900'}`}>
                {result}
              </p>
            )}
          </form>
        </div>

        {/* Coordonnées */}
        <div className="space-y-8">
          <div className="p-6 border rounded-lg bg-gray-50 space-y-4">
            <h3 className="text-xl font-bold text-[#0a1b3d]">Siège Social — Owendo, Gabon</h3>
            <p className="text-sm text-gray-600"> Quartier SNI, Libreville</p>
            <p className="text-sm text-gray-600 font-semibold">📞 +241 60338708</p>
            <p className="text-sm text-gray-600 font-semibold">✉️ infos.ogooue_consulting@ogoouegroupe.ga</p>
          </div>

          <div className="p-6 bg-[#0a1b3d] text-white rounded-lg space-y-3">
            <h4 className="font-bold text-lg">Support d'urgence 24/7</h4>
            <p className="text-xs text-gray-300">Pour toute urgence opérationnelle concernant nos activités portuaires.</p>
            <p className="text-xl font-bold text-blue-400"> +241 60338708</p>
          </div>
        </div>
      </section>
    </main>
  );
}
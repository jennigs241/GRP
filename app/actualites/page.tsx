import Link from "next/link";

export default function ActualitesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. SECTION HERO "ACTUALITÉS" */}
      <section className="bg-[#0a1b3d] text-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-sm uppercase tracking-widest text-blue-400 font-semibold">
            MÉDIAS & RÉSULTATS
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Actualités
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Restez informé des dernières avancées d'Ogooue Groupe, de nos projets stratégiques et de l'évolution de nos secteurs d'activité à travers le monde.
          </p>
        </div>
      </section>

      {/* 2. FILTRES DE NAVIGATION & RECHERCHE */}
      <section className="border-b border-gray-200 bg-white py-4 px-6 sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Filtres par catégorie */}
          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-semibold">
            <button className="bg-[#0a1b3d] text-white px-4 py-2 rounded transition">TOUS</button>
            <button className="text-gray-600 hover:text-[#0a1b3d] px-4 py-2 rounded transition">LOGISTIQUE</button>
            <button className="text-gray-600 hover:text-[#0a1b3d] px-4 py-2 rounded transition">FINANCE</button>
            <button className="text-gray-600 hover:text-[#0a1b3d] px-4 py-2 rounded transition">TECHNOLOGIE</button>
            <button className="text-gray-600 hover:text-[#0a1b3d] px-4 py-2 rounded transition">MARITIME</button>
          </div>

          {/* Barre de recherche */}
          <div className="flex items-center w-full md:w-auto gap-2">
            <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="Rechercher un article..." 
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded text-xs focus:outline-none focus:border-[#0a1b3d]"
              />
              <span className="absolute right-3 top-2.5 text-gray-400 text-xs">🔍</span>
            </div>
            <button className="border border-gray-300 px-3 py-2 rounded text-xs text-gray-600 hover:bg-gray-50">⚙️</button>
          </div>

        </div>
      </section>

      {/* 3. SECTION "À LA UNE" */}
      <section className="py-12 px-6 max-w-7xl mx-auto w-full">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          
          {/* Image de l'article à la une */}
          <div className="relative h-72 lg:h-auto min-h-[300px]">
            <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded shadow z-10">
              À LA UNE
            </span>
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d0fbb18f8f2d?auto=format&fit=crop&w=1000&q=80" 
              alt="Modernisation des terminaux portuaires" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contenu de l'article à la une */}
          <div className="p-8 lg:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-gray-500 font-semibold uppercase tracking-wider">
                <span className="text-[#1e40af]">LOGISTIQUE</span>
                <span>•</span>
                <span>15 MAI 2024</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a1b3d] leading-snug">
                Modernisation des terminaux portuaires : Ogooue Groupe investit dans de nouvelles technologies
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dans le cadre de son plan stratégique 2026, le groupe annonce une série d'investissements technologiques visant à optimiser les flux logistiques et réduire les délais d'attente au port terminal. Cette initiative majeure promet de redéfinir les standards du secteur...
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <Link href="#" className="bg-[#0a1b3d] hover:bg-blue-900 text-white px-5 py-2.5 rounded text-xs font-semibold transition">
                LIRE L'ARTICLE COMPLET
              </Link>
              <span className="text-xs text-gray-400">4 min de lecture</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SECTION "DERNIÈRES PUBLICATIONS" */}
      <section className="bg-gray-50 py-16 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-[#0a1b3d] flex items-center gap-2">
              <span>📄</span> Dernières Publications
            </h2>
            <span className="text-xs text-gray-500 font-semibold">Affichage de 6 articles</span>
          </div>

          {/* Grille des 6 articles récents */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {[
              { tag: "Finance", title: "Partenariat stratégique : Ogooue Groupe renforce son pôle consulting", date: "12 MAI 2024", read: "4 MIN", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80" },
              { tag: "Technologie", title: "Transformation numérique : Vers une nouvelle interface", date: "08 MAI 2024", read: "5 MIN", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80" },
              { tag: "Maritime", title: "Performance Opérationnelle : Les nouveaux records", date: "04 AVRIL 2024", read: "7 MIN", img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80" },
              { tag: "Tourisme", title: "Inauguration : Nouveau complexe hôtelier", date: "18 AVRIL 2024", read: "3 MIN", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80" },
              { tag: "Groupe", title: "Bilan Annuel 2023 : Une croissance soutenue", date: "02 AVRIL 2024", read: "6 MIN", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80" },
            ].map((art, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <div className="relative h-48">
                    <span className="absolute top-3 left-3 bg-[#0a1b3d] text-white text-[10px] uppercase font-bold px-2.5 py-1 rounded">
                      {art.tag}
                    </span>
                    <img src={art.img} alt={art.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span>{art.read} DE LECTURE</span>
                    </div>
                    <h3 className="font-bold text-[#0a1b3d] text-base leading-snug">
                      {art.title}
                    </h3>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-gray-100 text-xs">
                  <Link href="#" className="text-[#1e40af] font-bold hover:underline">Lire la suite →</Link>
                  <div className="flex gap-2 text-gray-400">
                    <button className="hover:text-[#0a1b3d]">🔗</button>
                    <button className="hover:text-[#0a1b3d]">🔖</button>
                  </div>
                </div>
              </div>
            ))}

            {/* Carte de remplissage pour faire les 6 articles de la maquette */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="relative h-48">
                  <span className="absolute top-3 left-3 bg-[#0a1b3d] text-white text-[10px] uppercase font-bold px-2.5 py-1 rounded">
                    Logistique
                  </span>
                  <img src="https://images.unsplash.com/photo-1586528116495-23133604f87e?auto=format&fit=crop&w=600&q=80" alt="Supply chain" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                    <span>28 MARS 2024</span>
                    <span>•</span>
                    <span>4 MIN DE LECTURE</span>
                  </div>
                  <h3 className="font-bold text-[#0a1b3d] text-base leading-snug">
                    Extension des corridors logistiques en Afrique centrale
                  </h3>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-gray-100 text-xs">
                <Link href="#" className="text-[#1e40af] font-bold hover:underline">Lire la suite →</Link>
                <div className="flex gap-2 text-gray-400">
                  <button className="hover:text-[#0a1b3d]">🔗</button>
                  <button className="hover:text-[#0a1b3d]">🔖</button>
                </div>
              </div>
            </div>

          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 pt-6">
            <span className="text-xs text-gray-500 mr-2">Pagination</span>
            <button className="w-8 h-8 bg-[#0a1b3d] text-white rounded text-xs font-bold">1</button>
            <button className="w-8 h-8 bg-white border border-gray-300 text-gray-700 rounded text-xs hover:bg-gray-50 font-bold">2</button>
            <button className="w-8 h-8 bg-white border border-gray-300 text-gray-700 rounded text-xs hover:bg-gray-50 font-bold">3</button>
            <span className="text-gray-400 px-1">...</span>
            <button className="w-8 h-8 bg-white border border-gray-300 text-gray-700 rounded text-xs hover:bg-gray-50 font-bold">12</button>
            <button className="px-3 h-8 bg-white border border-gray-300 text-gray-700 rounded text-xs hover:bg-gray-50 font-bold ml-2">Suivant</button>
          </div>

        </div>
      </section>

      {/* 5. NEWSLETTER / ABONNEMENT */}
      <section className="bg-[#0a1b3d] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto bg-[#0e224f] border border-blue-900/50 p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold">
              Restez à l'écoute de nos innovations
            </h2>
            <p className="text-gray-300 text-xs max-w-md">
              Inscrivez-vous à notre newsletter institutionnelle pour recevoir chaque mois nos analyses de marché et les actualités marquantes du Groupe Ogooue.
            </p>
          </div>

          <div className="w-full md:w-auto space-y-2">
            <div className="flex bg-white rounded overflow-hidden p-1">
              <input 
                type="email" 
                placeholder="Votre adresse email professionnelle" 
                className="px-3 py-2 text-xs text-gray-800 w-full focus:outline-none"
              />
              <button className="bg-[#e05638] hover:bg-red-700 text-white font-bold px-4 py-2 text-xs uppercase tracking-wider rounded transition whitespace-nowrap">
                S'abonner
              </button>
            </div>
            <p className="text-[10px] text-gray-400 text-center md:text-left">
              En vous abonnant, vous acceptez de recevoir notre newsletter. Consultez notre politique de confidentialité pour en savoir plus.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
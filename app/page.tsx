import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. SECTION HERO */}
      <section className="bg-[#0a1b3d] text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest bg-[#1e40af]/40 text-blue-300 px-3 py-1 rounded font-semibold">
              Investissements & Services au Gabon
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              La stratégie au coeur de vos opérations.
            </h1>
            <p className="text-lg text-gray-300 max-w-xl">
              Ogooue Groupe déploie une vision stratégique et un savoir-faire unique dans ses secteurs clés : de la logistique maritime complexe à la transformation numérique qui change votre vie.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/secteur-activite" className="bg-[#1e40af] hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition">
                Découvrir nos activités
              </Link>
              <Link href="/contact" className="border border-white/40 hover:bg-white/10 text-white px-6 py-3 rounded font-semibold transition">
                Nous contacter
              </Link>
            </div>
            <div className="flex items-center gap-6 pt-6 text-xs text-gray-400">
              <span className="flex items-center gap-1">📍 SNI, Owendo (GABON)</span>
              <span className="flex items-center gap-1">⚓ Expert en Maritime</span>
            </div>
          </div>

          <div className="relative h-[350px] md:h-[450px] rounded-lg overflow-hidden shadow-xl border border-gray-700">
            {/* Image de substitution ou illustration du port */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1b3d]/60 to-transparent z-10" />
            <img 
              src="WhhatsApp-Imagess-2026-01-27-at-14.34.23-1.jpeg" 
              alt="Port et logistique maritime" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* 2. SECTION CHIFFRES CLÉS */}
      <section className="bg-[#0e224f] text-white py-12 px-6 border-t border-blue-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-400">25+</h3>
            <p className="text-xs uppercase tracking-wider text-gray-300">Années d'expérience</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-400">500+</h3>
            <p className="text-xs uppercase tracking-wider text-gray-300">Collaborateurs</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-400">12</h3>
            <p className="text-xs uppercase tracking-wider text-gray-300">Pays de présence</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-400">1200</h3>
            <p className="text-xs uppercase tracking-wider text-gray-300">Projets réalisés</p>
          </div>
        </div>
      </section>

      {/* 3. SECTION À PROPOS DU GROUPE */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="/WhatsApp-Immage-20h26-03-05-at-21.43.33.jpeg" 
              alt="Siège Ogooue Groupe" 
              className="w-full h-[350px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-blue-600 font-semibold">
              À propos de nous
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1b3d]">
              Le Groupe Ogooué
            </h2>
            <p className="text-gray-600">
              Le Groupe Ogooué s'affirme comme un acteur majeur et diversifié, opérant avec une vision stratégique claire dans des secteurs clés de l'économie moderne : de la logistique maritime complexe à la transformation numérique, en passant par l'accompagnement financier et le tourisme.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 text-[#1e40af] rounded">💡</div>
                <div>
                  <h4 className="font-bold text-[#0a1b3d]">Innovation Continue</h4>
                  <p className="text-sm text-gray-500">Nous intégrons les meilleures technologies pour optimiser chaque maillon de la chaîne de valeur.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 text-[#1e40af] rounded">🤝</div>
                <div>
                  <h4 className="font-bold text-[#0a1b3d]">Engagement Local</h4>
                  <p className="text-sm text-gray-500">Une croissance forte au Gabon et dans toute la région pour soutenir le développement local.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/a-propos" className="inline-block border border-[#0a1b3d] text-[#0a1b3d] hover:bg-[#0a1b3d] hover:text-white px-6 py-3 rounded font-semibold transition">
                Lire notre histoire
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SECTION SECTEURS D'ACTIVITÉ (APERÇU DES 9 PÔLES) */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-blue-600 font-semibold">
              Expertise & Diversité
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1b3d]">
              Nos Secteurs d'Activité
            </h2>
            <p className="text-gray-600">
              Une synergie de compétences au service de vos ambitions. Nous opérons avec excellence dans neuf domaines stratégiques.
            </p>
          </div>

          {/* Grille des 9 secteurs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {[
              { title: "Expertise maritime sur Corps et Facultés navires", desc: "évaluation des navires, équipements et cargaisons, gestion des risques et assistance technique." },
              { title: "Service d'avitaillement", desc: "Notre service d'avitaillement (ou ship chandling) est conçu pour garantir la continuité opérationnelle de vos navires et infrastructures en mer, tout en minimisant les temps d'arrêt." },
              { title: "Garbage", desc: "Notre service assure l'évacuation rapide et sécurisée de tous les résidus générés par les navires, garantissant aux armateurs et capitaines une escale sereine et conforme aux réglementations internationales." },
              { title: "Immobilier & BTP", desc: "Développement de projets immobiliers modernes et commerciaux, d'actifs résidentiels haut standing." },
              { title: "Tourisme & Hôtellerie", desc: "Développement d'infrastructures touristiques, tradition d'excellence pour valoriser le patrimoine régional." },
              { title: "Énergie & Ressources", desc: "Investissements dans les énergies renouvelables et l'optimisation des ressources naturelles." },
              { title: "Transport & Logistique Terrestre", desc: "Réseaux de distribution inter-États et chaînes de flux à travers le continent." },
              { title: "Santé & Pharma", desc: "Déploiement d'infrastructure de santé moderne et approvisionnement pharmaceutique et-liques." },
              { title: "Agriculture & Agro-industrie", desc: "Soutien aux production agricoles durables et la transformation locale des produits." }
            ].map((secteur, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#0a1b3d]">{secteur.title}</h3>
                  <p className="text-gray-600 text-sm">{secteur.desc}</p>
                </div>
                <Link href="/secteur-activite" className="text-[#1e40af] text-sm font-semibold hover:underline">
                  En savoir plus →
                </Link>
              </div>
            ))}

          </div>

          <div className="text-center pt-4">
            <Link href="/secteur-activite" className="bg-[#0a1b3d] hover:bg-blue-900 text-white px-8 py-3 rounded font-semibold transition inline-block">
              Voir tous les secteurs
            </Link>
          </div>

        </div>
      </section>

      {/* 5. APPEL À L'ACTION : PARTENAIRE DE CROISSANCE */}
      <section className="bg-[#0a1b3d] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Partenaire de votre croissance durable
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Rejoignez les institutions et entreprises qui font confiance à l'expertise d'Ogooué Groupe pour leurs projets structurants.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href="/contact" className="bg-[#1e40af] hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition">
              Démarrer un projet
            </Link>
            <Link href="/actualites" className="border border-white/40 hover:bg-white/10 text-white px-6 py-3 rounded font-semibold transition">
              Suivre nos actualités
            </Link>
          </div>
        </div>
      </section>

      {/* 6. INFOS PRATIQUES / BANDEAU INFÉRIEUR */}
      <section className="bg-gray-100 py-6 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
          <div className="flex items-center gap-3">
            <span className="text-xl">📍</span>
            <div>
              <p className="font-bold text-[#0a1b3d]">Siège Social</p>
              <p className="text-gray-500">SNI,Owendo,Gabon</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl">🌐</span>
            <div>
              <p className="font-bold text-[#0a1b3d]">Réseau International</p>
              <p className="text-gray-500">Afrique Centrale, Europe & Asie</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl">🛡️</span>
            <div>
              <p className="font-bold text-[#0a1b3d]">Conformité</p>
              <p className="text-gray-500">Standards ISO & Gouvernance stricte</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
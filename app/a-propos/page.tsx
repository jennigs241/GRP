import Link from "next/link";

export default function AProposPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. SECTION HERO "NOTRE IDENTITÉ" */}
      <section className="bg-[#0a1b3d] text-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-6">
          <span className="text-sm uppercase tracking-widest text-blue-400 font-semibold">
            Accueil → À propos de nous
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Notre Identité
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Un conglomérat diversifié, moteur de croissance et d'innovation en Afrique centrale, porté par une vision d'excellence opérationnelle et de responsabilité sociale.
          </p>
        </div>
      </section>

      {/* 2. SECTION EXCELLENCE AU CŒUR DE NOS OPÉRATIONS */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Équipe au travail" 
              className="w-full h-[400px] object-cover"
            />
            {/* Badge de certification ISO */}
            <div className="absolute bottom-6 left-6 bg-white text-[#0a1b3d] px-6 py-3 rounded shadow-lg flex items-center gap-3 border border-gray-100">
              <span className="text-xl">🛡️</span>
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Certification</p>
                <p className="font-extrabold text-lg">ISO 9001:2015</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-blue-600 font-semibold">
              À propos de nous
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1b3d]">
              Ogooue Groupe : La stratégie au Cœur de vos Opérations
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Le Groupe Ogooué s’affirme comme un acteur majeur et diversifié, opérant avec une vision stratégique dans des secteurs clés de l’économie moderne. De la logistique maritime complexe à la transformation numérique, en passant par l’accompagnement financier et le tourisme, le Groupe déploie un savoir-faire unique pour répondre aux enjeux de croissance actuels.

Certified Company
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Fondé sur des valeurs de transparence et de rigueur, nous accompagnons nos partenaires institutionnels et clients privés dans leurs projets les plus ambitieux. Notre ancrage local allié à une expertise internationale nous permet de naviguer avec agilité dans un environnement économique en perpétuelle mutation.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-100">
              <div>
                <h3 className="text-3xl font-extrabold text-[#0a1b3d]">15+</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Années d'expérience</p>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-[#0a1b3d]">250+</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Collaborateurs Experts</p>
              </div>
            </div>

            <div className="pt-2">
              <Link href="/secteur-activite" className="inline-block bg-[#0a1b3d] hover:bg-blue-900 text-white px-6 py-3 rounded font-semibold transition">
                Découvrir nos services
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SECTION VALEURS & ENGAGEMENTS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-blue-600 font-semibold">
              Nos Fondements
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1b3d]">
              Nos Valeurs et Engagements
            </h2>
            <p className="text-gray-600 text-sm">
              Notre culture d'entreprise repose sur des principes solides qui guident chaque décision et interaction au sein du Groupe.
            </p>
          </div>

          {/* Grille des 4 valeurs */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-3">
              <div className="w-10 h-10 bg-blue-50 text-[#1e40af] flex items-center justify-center rounded font-bold">✓</div>
              <h3 className="text-xl font-bold text-[#0a1b3d]">Intégrité</h3>
              <p className="text-gray-600 text-xs leading-relaxed">Nous agissons avec honnêteté et transparence, garantissant la confiance totale de nos partenaires.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-3">
              <div className="w-10 h-10 bg-blue-50 text-[#1e40af] flex items-center justify-center rounded font-bold">⚡</div>
              <h3 className="text-xl font-bold text-[#0a1b3d]">Excellence</h3>
              <p className="text-gray-600 text-xs leading-relaxed">La recherche constante de la qualité supérieure dans l'exécution de nos missions quotidiennes.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-3">
              <div className="w-10 h-10 bg-blue-50 text-[#1e40af] flex items-center justify-center rounded font-bold">💡</div>
              <h3 className="text-xl font-bold text-[#0a1b3d]">Innovation</h3>
              <p className="text-gray-600 text-xs leading-relaxed">L'adoption proactive des technologies numériques pour transformer nos métiers traditionnels.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-3">
              <div className="w-10 h-10 bg-blue-50 text-[#1e40af] flex items-center justify-center rounded font-bold">🤝</div>
              <h3 className="text-xl font-bold text-[#0a1b3d]">Responsabilité</h3>
              <p className="text-gray-600 text-xs leading-relaxed">Un engagement fort envers le développement durable et le bien-être de nos communautés locales.</p>
            </div>

          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm space-y-4">
              <h3 className="text-2xl font-bold text-[#0a1b3d] flex items-center gap-3">
                <span>🎯</span> Notre Mission
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Fournir des solutions intégrées et innovantes qui facilitent les échanges commerciaux, propulsent la digitalisation et soutiennent le développement économique à travers des services de classe mondiale en Afrique.
              </p>
              <ul className="space-y-2 text-xs text-gray-600 pt-2 border-t border-gray-100">
                <li className="flex items-center gap-2">✓ Optimisation des flux logistiques</li>
                <li className="flex items-center gap-2">✓ Conseil stratégique à haute valeur ajoutée</li>
                <li className="flex items-center gap-2">✓ Inclusion numérique pour tous</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm space-y-4">
              <h3 className="text-2xl font-bold text-[#0a1b3d] flex items-center gap-3">
                <span>👁️</span> Notre Vision
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Devenir le partenaire de référence incontournable en Afrique centrale pour les services multisectoriels, reconnu pour notre agilité technologique et notre excellence opérationnelle maritime.
              </p>
              <div className="flex gap-4 pt-4 border-t border-gray-100">
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded font-medium">Leadership Sous-régional</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded font-medium">Agilité Technologique</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. SECTION NOTRE HISTOIRE (CHRONOLOGIE) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-blue-600 font-semibold">
              Notre Histoire
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1b3d]">
              Un Parcours de Croissance et d'Expansion
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Découvrez les étapes clés qui ont façonné Ogooue Groupe depuis sa création jusqu'à sa position actuelle de leader multisectoriel.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg space-y-2 border border-blue-100">
              <span className="text-xl">🏛️</span>
              <h4 className="font-bold text-[#0a1b3d]">Des racines solides</h4>
              <p className="text-xs text-gray-600">Né d'une volonté de moderniser la logistique portuaire locale, le groupe a su se diversifier intelligemment pour répondre aux nouveaux besoins de l'économie numérique et financière.</p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8 border-l-2 border-blue-200 pl-6 md:pl-10 relative">
            
            {/* Timeline Item 1 */}
            <div className="relative space-y-1">
              <span className="absolute -left-[31px] md:-left-[47px] top-1 w-4 h-4 bg-[#1e40af] rounded-full border-4 border-white" />
              <span className="text-xs font-bold text-blue-600">2008</span>
              <h3 className="text-xl font-bold text-[#0a1b3d]">Fondation d'Ogooue Logistics</h3>
              <p className="text-gray-600 text-xs">Création de la première entité dédiée à la consignation maritime et à la manutention portuaire à Libreville.</p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative space-y-1">
              <span className="absolute -left-[31px] md:-left-[47px] top-1 w-4 h-4 bg-[#1e40af] rounded-full border-4 border-white" />
              <span className="text-xs font-bold text-blue-600">2012</span>
              <h3 className="text-xl font-bold text-[#0a1b3d]">Expansion Régionale</h3>
              <p className="text-gray-600 text-xs">Ouverture de bureaux de liaison stratégiques et renforcement de notre flotte logistique terrestre.</p>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative space-y-1">
              <span className="absolute -left-[31px] md:-left-[47px] top-1 w-4 h-4 bg-[#1e40af] rounded-full border-4 border-white" />
              <span className="text-xs font-bold text-blue-600">2016</span>
              <h3 className="text-xl font-bold text-[#0a1b3d]">Naissance d'Ogooue Digital</h3>
              <p className="text-gray-600 text-xs">Lancement de notre branche technologique spécialisée dans la transformation numérique des administrations.</p>
            </div>

            {/* Timeline Item 4 */}
            <div className="relative space-y-1">
              <span className="absolute -left-[31px] md:-left-[47px] top-1 w-4 h-4 bg-[#1e40af] rounded-full border-4 border-white" />
              <span className="text-xs font-bold text-blue-600">2019</span>
              <h3 className="text-xl font-bold text-[#0a1b3d]">Diversification Financière & Conseil</h3>
              <p className="text-gray-600 text-xs">Création d'Ogooue Consulting pour accompagner les investisseurs institutionnels dans la sous-région.</p>
            </div>

            {/* Timeline Item 5 */}
            <div className="relative space-y-1">
              <span className="absolute -left-[31px] md:-left-[47px] top-1 w-4 h-4 bg-[#1e40af] rounded-full border-4 border-white" />
              <span className="text-xs font-bold text-blue-600">2023</span>
              <h3 className="text-xl font-bold text-[#0a1b3d]">Consolidation du Groupe</h3>
              <p className="text-gray-600 text-xs">Unification des entités sous la bannière Ogooue Groupe et certification ISO globale.</p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. APPEL À L'ACTION FINAL */}
      <section className="bg-gray-50 py-16 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 p-10 rounded-xl shadow-sm text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1b3d]">
            Prêt à collaborer avec un partenaire de confiance ?
          </h2>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            Que vous soyez une institution publique ou une entreprise privée, nos experts sont à votre disposition pour étudier vos besoins et vous proposer des solutions sur mesure.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link href="/contact" className="bg-[#0a1b3d] hover:bg-blue-900 text-white px-6 py-3 rounded font-semibold transition text-sm">
              Contacter le siège
            </Link>
            <Link href="/actualites" className="border border-gray-300 hover:bg-gray-50 text-gray-800 px-6 py-3 rounded font-semibold transition text-sm">
              Nos actualités
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
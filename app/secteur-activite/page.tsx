import Link from "next/link";

export default function SecteurActivitePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* SECTION HERO SECTEURS */}
      <section className="bg-[#0a1b3d] text-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-6">
          <span className="text-sm uppercase tracking-widest text-blue-400 font-semibold">
            Accueil / Secteurs d'activité
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Nos Secteurs d'Activité
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Ogooue Groupe déploie son expertise à travers neuf pôles stratégiques pour répondre aux défis de l'économie moderne et favoriser une croissance durable.
          </p>
        </div>
      </section>

      {/* SECTION MULTISECTORIELLE & GRILLE DES 9 SECTEURS */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-blue-600 font-semibold">
            Expertise & Vision
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1b3d]">
            Une présence multisectorielle stratégique
          </h2>
          <p className="text-gray-600">
            Grâce à une synergie unique entre nos entités, nous offrons des solutions intégrées qui allient tradition industrielle et innovation technologique.
          </p>
        </div>

        {/* Grille des 9 cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. Logistique Maritime & Portuaire */}
          <div className="p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition bg-gray-50 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0a1b3d]">Logistique Maritime & Portuaire</h3>
              <p className="text-gray-600">Leader dans la gestion portuaire et le transport maritime international, assurant une fluidité optimale des flux commerciaux et logistiques.</p>
            </div>
            <span className="inline-block text-[#1e40af] font-semibold cursor-pointer hover:underline">En savoir plus →</span>
          </div>

          {/* 2. Transformation Numérique */}
          <div className="p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition bg-gray-50 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0a1b3d]">Transformation Numérique</h3>
              <p className="text-gray-600">Accompagnement technologique pour moderniser les infrastructures IT, la cybersécurité et déployer des solutions digitales innovantes.</p>
            </div>
            <span className="inline-block text-[#1e40af] font-semibold cursor-pointer hover:underline">En savoir plus →</span>
          </div>

          {/* 3. Conseil Financier */}
          <div className="p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition bg-gray-50 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0a1b3d]">Conseil Financier</h3>
              <p className="text-gray-600">Expertise stratégique pour la gestion d'actifs, les fusions-acquisitions, l'audit et l'optimisation de la performance financière globale.</p>
            </div>
            <span className="inline-block text-[#1e40af] font-semibold cursor-pointer hover:underline">En savoir plus →</span>
          </div>

          {/* 4. Immobilier & BTP */}
          <div className="p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition bg-gray-50 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0a1b3d]">Immobilier & BTP</h3>
              <p className="text-gray-600">Développement de projets immobiliers d'envergure, conception architecturale et construction d'infrastructures durables.</p>
            </div>
            <span className="inline-block text-[#1e40af] font-semibold cursor-pointer hover:underline">En savoir plus →</span>
          </div>

          {/* 5. Tourisme & Hôtellerie */}
          <div className="p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition bg-gray-50 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0a1b3d]">Tourisme & Hôtellerie</h3>
              <p className="text-gray-600">Développement de destinations de prestige, gestion d'infrastructures hôtelières haut de gamme et promotion du tourisme local.</p>
            </div>
            <span className="inline-block text-[#1e40af] font-semibold cursor-pointer hover:underline">En savoir plus →</span>
          </div>

          {/* 6. Énergie & Ressources */}
          <div className="p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition bg-gray-50 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0a1b3d]">Énergie & Ressources</h3>
              <p className="text-gray-600">Exploitation responsable des ressources naturelles et développement de solutions énergétiques renouvelables et durables.</p>
            </div>
            <span className="inline-block text-[#1e40af] font-semibold cursor-pointer hover:underline">En savoir plus →</span>
          </div>

          {/* 7. Transport & Logistique Terrestre */}
          <div className="p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition bg-gray-50 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0a1b3d]">Transport & Logistique Terrestre</h3>
              <p className="text-gray-600">Optimisation des chaînes d'approvisionnement terrestres, transport routier et ferroviaire de marchandises à travers le continent.</p>
            </div>
            <span className="inline-block text-[#1e40af] font-semibold cursor-pointer hover:underline">En savoir plus →</span>
          </div>

          {/* 8. Santé & Pharma */}
          <div className="p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition bg-gray-50 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0a1b3d]">Santé & Pharma</h3>
              <p className="text-gray-600">Investissements dans les infrastructures médicales, distribution pharmaceutique et amélioration de l'accès aux soins de qualité.</p>
            </div>
            <span className="inline-block text-[#1e40af] font-semibold cursor-pointer hover:underline">En savoir plus →</span>
          </div>

          {/* 9. Agriculture & Agro-industrie */}
          <div className="p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition bg-gray-50 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0a1b3d]">Agriculture & Agro-industrie</h3>
              <p className="text-gray-600">Développement de filières agricoles performantes, transformation locale et renforcement de la sécurité alimentaire régionale.</p>
            </div>
            <span className="inline-block text-[#1e40af] font-semibold cursor-pointer hover:underline">En savoir plus →</span>
          </div>

        </div>
      </section>
    </div>
  );
}
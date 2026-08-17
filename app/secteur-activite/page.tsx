import Link from "next/link";

// Définition des données des 9 secteurs
const secteurs = [
  {
    slug: "logistique-maritime",
    title: "Logistique Maritime & Portuaire",
    description: "Leader dans la gestion portuaire et le transport maritime international, assurant une fluidité optimale des flux commerciaux et logistiques.",
  },
  {
    slug: "transformation-numerique",
    title: "Transformation Numérique",
    description: "Accompagnement technologique pour moderniser les infrastructures IT, la cybersécurité et déployer des solutions digitales innovantes.",
  },
  {
    slug: "conseil-financier",
    title: "Conseil Financier",
    description: "Expertise stratégique pour la gestion d'actifs, les fusions-acquisitions, l'audit et l'optimisation de la performance financière globale.",
  },
  {
    slug: "immobilier-btp",
    title: "Immobilier & BTP",
    description: "Développement de projets immobiliers d'envergure, conception architecturale et construction d'infrastructures durables.",
  },
  {
    slug: "tourisme-hotellerie",
    title: "Tourisme & Hôtellerie",
    description: "Développement de destinations de prestige, gestion d'infrastructures hôtelières haut de gamme et promotion du tourisme local.",
  },
  {
    slug: "energie-ressources",
    title: "Énergie & Ressources",
    description: "Exploitation responsable des ressources naturelles et développement de solutions énergétiques renouvelables et durables.",
  },
  {
    slug: "transport-terrestre",
    title: "Transport & Logistique Terrestre",
    description: "Optimisation des chaînes d'approvisionnement terrestres, transport routier et ferroviaire de marchandises à travers le continent.",
  },
  {
    slug: "sante-pharma",
    title: "Santé & Pharma",
    description: "Investissements dans les infrastructures médicales, distribution pharmaceutique et amélioration de l'accès aux soins de qualité.",
  },
  {
    slug: "agriculture-agro-industrie",
    title: "Agriculture & Agro-industrie",
    description: "Développement de filières agricoles performantes, transformation locale et renforcement de la sécurité alimentaire régionale.",
  },
];

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
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-16 w-full">
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

        {/* Grille des 9 cartes dynamiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {secteurs.map((secteur) => (
            <div 
              key={secteur.slug} 
              className="p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition bg-gray-50 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#0a1b3d]">{secteur.title}</h3>
                <p className="text-gray-600">{secteur.description}</p>
              </div>
              
              {/* Lien dynamique pointant vers /secteur-activite/[slug] */}
              <Link 
                href={`/secteur-activite/${secteur.slug}`}
                className="inline-block text-[#1e40af] font-semibold hover:underline"
              >
                En savoir plus →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
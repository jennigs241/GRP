import Link from "next/link"

// Définition des données des 9 secteurs
const secteurs = [
  {
    slug: "expertise-maritime",
    title: "Expertise maritime sur Corps et Facultés navires",
    description: "Expertise et inspection maritime (« Corps et Facultés ») : évaluation des navires, équipements et cargaisons, gestion des risques et assistance technique.",
    image: "/WhatsApp-Image-2026-03-05-at-2r1.43.35", // <--- 2. Ajoute le chemin de ton image
  },
  {
    slug: "avitaillement",
    title: "Service d'avitaillement",
    description: "Notre service d'avitaillement (ou ship chandling) est conçu pour garantir la continuité opérationnelle de vos navires et infrastructures en mer, tout en minimisant les temps d'arrêt.",
    image: "/WhatsApp-iImage-2026-03-05-at-2r1.43.35.jpeg", // <--- 2. Ajoute le chemin de ton image
  },
  {
    slug: "Garbage",
    title: "Garbage",
    description: "Notre service assure l'évacuation rapide et sécurisée de tous les résidus générés par les navires, garantissant aux armateurs et capitaines une escale sereine et conforme aux réglementations internationales.",
    image: "/WhatsAppp-Image-202g6-03-05-at-21.43.33.jpeg",
  },
  {
    slug: "gestion-quai",
    title: "Gestion de Quai",
    description: "Nous proposons aux autorités portuaires et aux propriétaires de terminaux privés une solution clé en main pour la gestion opérationnelle des quais. Nous transformons vos infrastructures en zones de haute performance grâce à une présence physique constante et une rigueur logistique absolue.",
     image: "/WhatsApp-Imagesss-2026-01-27-at-14.34.23-1.jpeg",
  },
  {
    slug: "service-pi",
    title: "Service P&I (Protection & Indemnity)",
    description: "Protection & Représentation des Intérêts Une gestion rigoureuse des risques et des sinistres maritimes. ",
     image: "/PI-IMAGE.png",
  },
  {
    slug: "consignation",
    title: "Consignation de Navires",
    description: "Nos services d'agents shippings et de manutention couvrent l'ensemble des besoins opérationnels pour la gestion des navires et des cargaisons, en assurant sécurité, efficacité et conformité aux normes maritimes.",
      image: "/WhatsApp-Immage-20h26-03-05-at-21.43.33.jpeg",
  },
  {
    slug: "plongee-professionnelle",
    title: "Plongée Professionnelle & Maintenance Sous-Marine",
    description: "Notre équipe de plongeurs professionnels et de techniciens certifiés intervient dans les environnements maritimes les plus exigeants pour garantir la continuité de vos opérations et la sécurité de vos infrastructures.",
    image: "/Ccapture décran 2026-08-17 213235.jpg",
  },
  {
    slug: "placement-personnel-naviguant",
    title: "Placement et Gestion du Personnel Naviguant",
    description: "Dans un secteur maritime en constante évolution, la compétence et la fiabilité de l'équipage constituent les véritables piliers de la sécurité en mer et de la rentabilité de vos opérations. Nous sélectionnons, plaçons et administrons des profils hautement qualifiés pour garantir la continuité, l'efficacité et la conformité réglementaire de vos missions maritimes et fluviales.",
    image: "/WjhatsApp-Image-2026-03-05-at-21.43.35-2.jpeg",
  },
  {
    slug: "manutention-onshore-offshore",
    title: "manutention-onshore-offshore",
    description: "Stevedoring & Acconage",
  image: "/manutention-des-navires.jpg",
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
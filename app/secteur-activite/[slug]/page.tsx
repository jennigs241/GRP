import Link from "next/link";
import { notFound } from "next/navigation";

// Base de données des détails pour chaque secteur
const secteursDetails: Record<string, { title: string; subtitle: string; content: string[] }> = {
  "logistique-maritime": {
    title: "Logistique Maritime & Portuaire",
    subtitle: "Fluidité optimale des flux commerciaux et maritimes internationaux.",
    content: [
      "Ogooue Groupe assure une gestion portuaire de premier plan, connectant les hubs stratégiques aux marchés mondiaux.",
      "Nos services incluent la manutention, le consignage de navires, l'avitaillement ainsi que la gestion sécurisée des conteneurs.",
      "Nous misons sur la modernisation de nos infrastructures pour réduire les délais d'escale et garantir une efficacité logistique durable."
    ]
  },
  "transformation-numerique": {
    title: "Transformation Numérique",
    subtitle: "Modernisation des infrastructures IT et innovation digitale.",
    content: [
      "Dans un monde hyperconnecté, nous accompagnons les entreprises et les institutions dans leur transition numérique.",
      "De la cybersécurité au déploiement de solutions cloud, en passant par le développement de logiciels sur mesure et l'intelligence artificielle.",
      "Notre objectif : optimiser la productivité et sécuriser les données critiques de nos partenaires."
    ]
  },
  "conseil-financier": {
    title: "Conseil Financier",
    subtitle: "Stratégie, gestion d'actifs et optimisation de la performance.",
    content: [
      "Notre pôle de conseil financier offre une expertise de pointe en matière d'audit, de levées de fonds et de fusions-acquisitions.",
      "Nous aidons les investisseurs à structurer leurs projets et à maximiser la rentabilité de leurs actifs tout en maîtrisant les risques.",
      "Une approche rigoureuse alignée sur les standards internationaux les plus exigeants."
    ]
  },
  "immobilier-btp": {
    title: "Immobilier & BTP",
    subtitle: "Construction durable et conception architecturale d'envergure.",
    content: [
      "Nous concevons et bâtissons des infrastructures modernes (résidentielles, commerciales et industrielles) adaptées aux défis urbains de demain.",
      "Nos équipes intègrent les principes de l'éco-construction pour limiter l'empreinte carbone et garantir des ouvrages solides et pérennes."
    ]
  },
  "tourisme-hotellerie": {
    title: "Tourisme & Hôtellerie",
    subtitle: "Destinations de prestige et hôtellerie haut de gamme.",
    content: [
      "Valorisation du patrimoine local et création d'expériences touristiques immersives.",
      "Gestion d'hôtels et de complexes touristiques axés sur l'excellence du service et le confort de nos visiteurs."
    ]
  },
  "energie-ressources": {
    title: "Énergie & Ressources",
    subtitle: "Exploitation responsable et transition énergétique.",
    content: [
      "Engagement fort dans le développement de sources d'énergie durables et l'exploitation éco-responsable des ressources naturelles.",
      "Investissements dans les technologies propres pour alimenter l'industrie de demain."
    ]
  },
  "transport-terrestre": {
    title: "Transport & Logistique Terrestre",
    subtitle: "Réseaux routiers et ferroviaires performants.",
    content: [
      "Optimisation de la chaîne d'approvisionnement terrestre pour relier efficacement les zones de production aux centres de consommation.",
      "Sécurité, traçabilité et rapidité au cœur de notre flotte de transport."
    ]
  },
  "sante-pharma": {
    title: "Santé & Pharma",
    subtitle: "Infrastructures médicales et accès aux soins.",
    content: [
      "Amélioration de l'accès aux soins à travers la modernisation des plateaux techniques et la distribution pharmaceutique de qualité.",
      "Partenariats stratégiques pour renforcer les systèmes de santé locaux."
    ]
  },
  "agriculture-agro-industrie": {
    title: "Agriculture & Agro-industrie",
    subtitle: "Sécurité alimentaire et transformation locale.",
    content: [
      "Soutien à une agriculture moderne et intensive tout en respectant l'environnement.",
      "Transformation locale des matières premières pour stimuler la valeur ajoutée régionale."
    ]
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function SecteurDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const secteur = secteursDetails[slug];

  // Si le slug n'existe pas dans le dictionnaire, renvoyer une erreur 404
  if (!secteur) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header de la page de détail */}
      <section className="bg-[#0a1b3d] text-white py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link href="/secteur-activite" className="text-sm uppercase tracking-widest text-blue-400 font-semibold hover:underline">
            ← Retour aux secteurs
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold">{secteur.title}</h1>
          <p className="text-lg text-gray-300">{secteur.subtitle}</p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16 px-6 max-w-4xl mx-auto space-y-8 flex-1 w-full">
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          {secteur.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-[#0a1b3d] mb-4">Besoin de collaborer avec nous sur ce secteur ?</h3>
          <Link
            href="/contact"
            className="inline-block bg-[#0a1b3d] text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-900 transition"
          >
            Contactez nos experts
          </Link>
        </div>
      </section>
    </div>
  );
}
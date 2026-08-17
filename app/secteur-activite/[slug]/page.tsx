import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const secteursDetails: Record<string, { title: string; subtitle: string; image?: string; content: string[] }> = {
  "expertise-maritime": {
    title: "Expertise Maritime",
    subtitle: "Expertise et inspection maritime (« Corps et Facultés ») : évaluation des navires, des équipements et des cargaisons, gestion des risques et assistance technique.",
    image: "/WhatsApp-Image-2026-03-05-at-2r1.43.35.jpeg",
    content: [
      "Notre équipe d'experts est spécialisée dans l'évaluation des navires, de leurs équipements et de leurs cargaisons. Nous réalisons des expertises « Corps et Facultés » pour garantir la sécurité et la conformité des navires.",
      "Nos missions consistent à évaluer les dommages, à conseiller nos clients sur la maintenance et à les accompagner dans la gestion des risques.",
      "Nos Domaines d'Intervention :",
      "• Draft survey",
      "• Preloading survey",
      "• Bunker survey",
      "• On/off hire and conditions survey",
      "• Dépotage de conteneur",
      "• Rapport d'avarie",
      "• Plongée sous-marine"
    ]
  },
  "avitaillement": {
    title: "Service d'avitaillement",
    subtitle: "Notre service d'avitaillement (ou ship chandling) est conçu pour garantir la continuité opérationnelle de vos navires et infrastructures en mer, tout en minimisant les temps d'arrêt.",
    image: "/WhatsApp-iImage-2026-03-05-at-2r1.43.35.jpeg",
    content: [
      "Notre service d'avitaillement (ou ship chandling) est conçu pour garantir la continuité opérationnelle de vos navires et infrastructures en mer, tout en minimisant les temps d'arrêt.",
      "Nous proposons une solution logistique intégrée couvrant tous les besoins essentiels, que vos unités soient amarrées au port ou positionnées au large.",
      "Les Avantages Ogooué Consulting :",
      "• Réactivité 24/7 : Le secteur maritime n'attend pas ; nos équipes sont mobilisables en permanence pour respecter vos fenêtres de départ.",
      "• Conformité et Sécurité : Respect strict des normes douanières et de sécurité portuaire (Code ISPS).",
      "• Guichet Unique : Un seul point de contact pour centraliser vos commandes de carburant, de nourriture et de matériel technique, simplifiant ainsi votre facturation et votre gestion logistique."
    ]
  },
  "Garbage": {
    title: "Garbage",
    subtitle: "Notre service assure l'évacuation rapide et sécurisée de tous les résidus générés par les navires, garantissant aux armateurs et capitaines une escale sereine et conforme aux réglementations internationales.",
    image: "/WhatsAppp-Image-202g6-03-05-at-21.43.33.jpeg",
    content: [
      "Notre service assure l'évacuation rapide et sécurisée de tous les résidus générés par les navires, garantissant aux armateurs et capitaines une escale sereine et conforme aux réglementations internationales.",
      "1. Collecte à Quai",
      "Pour les navires amarrés, nous intervenons avec une logistique terrestre flexible :",
      "• Mise à disposition de bennes étanches et de conteneurs : Directement sur le terre-plein pour faciliter le tri.",
      "• Rotation rapide des équipements : Pour ne pas encombrer les opérations de manutention (chargement/déchargement).",
      "• Équipes de manutention formées : Pour le tri et l'évacuation des déchets de cuisine, plastiques et déchets banals.",
      "2. Collecte en Rade (Service Offshore / Ancrage)",
      "Pour les navires au mouillage ne touchant pas terre, nous opérons par voie maritime :",
      "• Bateaux de service : Barges ou supply boats équipés de grues et de capacités de stockage pontées.",
      "• Transfert sécurisé : Des sacs et conteneurs du bord vers notre unité navale, même dans des conditions de mer modérées.",
      "• Réduction des coûts : Pour l'armateur en évitant une entrée au port uniquement pour les déchets.",
      "3. Sludges & Bilges",
      "• Gestion spécialisée des boues et des eaux de cale pour assurer la conformité environnementale et la sécurité à bord."
    ]
  },
  "conseil-financier": {
    title: "Conseil Financier",
    subtitle: "Stratégie, gestion d'actifs, audit et optimisation de la performance financière globale.",
    content: [
      "Nous accompagnons les organisations dans la structuration de leurs investissements, la levée de fonds et l'optimisation de leur gestion financière.",
      "Nos experts réalisent des audits rigoureux et conseillent les décideurs pour maximiser la rentabilité tout en maîtrisant les risques."
    ]
  },
  "immobilier-btp": {
    title: "Immobilier & BTP",
    subtitle: "Développement de projets d'envergure, conception architecturale et construction d'infrastructures durables.",
    content: [
      "Nous intervenons sur l'ensemble du cycle de vie des projets immobiliers et de construction, du foncier à la livraison clé en main.",
      "Notre engagement : bâtir des infrastructures modernes, sécurisées et respectueuses des normes environnementales."
    ]
  },
  "tourisme-hotellerie": {
    title: "Tourisme & Hôtellerie",
    subtitle: "Développement de destinations de prestige et gestion d'infrastructures hôtelières haut de gamme.",
    content: [
      "Nous concevons et exploitons des projets touristiques qui valorisent le patrimoine local tout en offrant des standards de service internationaux.",
      "Notre approche garantit une expérience mémorable pour les voyageurs et une rentabilité pérenne pour les investisseurs."
    ]
  },
  "energie-ressources": {
    title: "Énergie & Ressources",
    subtitle: "Exploitation responsable des ressources et développement de solutions énergétiques durables.",
    content: [
      "Face aux défis climatiques et énergétiques, nous accompagnons la transition vers des sources d'énergie plus propres et une gestion optimisée des ressources naturelles.",
      "Nous allions performance industrielle et responsabilité environnementale."
    ]
  },
  "transport-logistique": {
    title: "Transport & Logistique Terrestre",
    subtitle: "Optimisation des chaînes d'approvisionnement et des réseaux de transport de marchandises.",
    content: [
      "Nous structurons des réseaux logistiques fluides et performants pour relier les centres de production aux marchés de consommation.",
      "Sécurité, traçabilité et ponctualité sont au cœur de nos engagements opérationnels."
    ]
  },
  "sante-pharma": {
    title: "Santé & Pharma",
    subtitle: "Renforcement des infrastructures médicales et amélioration de l'accès aux soins et aux produits de santé.",
    content: [
      "Nous soutenons le secteur de la santé à travers la modernisation des infrastructures, l'approvisionnement sécurisé en produits pharmaceutiques et le respect des normes sanitaires.",
      "Notre mission : contribuer durablement au bien-être des populations."
    ]
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function SecteurDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const secteur = secteursDetails[slug];

  if (!secteur) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#0a1b3d] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/secteur-activite" className="text-blue-400 hover:underline">
            ← Retour aux secteurs
          </Link>
          <h1 className="text-4xl font-bold mt-4">{secteur.title}</h1>
          <p className="text-lg text-gray-300 mt-2">{secteur.subtitle}</p>
        </div>
      </header>

      <main className="py-16 px-6 max-w-4xl mx-auto">
        {secteur.image && (
          <div className="relative w-full h-80 rounded-xl overflow-hidden mb-8 shadow-lg">
            <Image src={secteur.image} alt={secteur.title} fill className="object-cover" />
          </div>
        )}
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          {secteur.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </main>
    </div>
  );
}
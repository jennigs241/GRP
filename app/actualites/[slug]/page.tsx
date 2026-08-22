import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const secteursDetails: Record<string, { title: string; subtitle: string; image?: string; content: string[] }> = {
  "modernisation-terminaux-portuaires": {
    title: "LOGISTIQUE",
    subtitle: "Modernisation des terminaux portuaires : Ogooue Groupe investit dans de nouvelles technologies",
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
  "gestion-quai": {
    title: "Gestion de Quai",
    subtitle: "Nous proposons aux autorités portuaires et aux propriétaires de terminaux privés une solution clé en main pour la gestion opérationnelle des quais. Nous transformons vos infrastructures en zones de haute performance grâce à une présence physique constante et une rigueur logistique absolue.",
    image: "/WhatsApp-Imagesss-2026-01-27-at-14.34.23-1.jpeg",
    content: [
      "Nous proposons aux autorités portuaires et aux propriétaires de terminaux privés une solution clé en main pour la gestion opérationnelle des quais. Nous transformons vos infrastructures en zones de haute performance grâce à une présence physique constante et une rigueur logistique absolue.",
      "1. Lamanage Professionnel",
      "• Sécurité des manœuvres : Nous contrôlons la maîtrise des interfaces navire-terre pour garantir l'intégrité de vos infrastructures.",
      "• Équipes de Réception : Personnel qualifié posté à l'arrivée pour la saisie des amarres et la sécurisation du navire.",
      "• Maîtrise des Forces : Opérations d'amarrage et de désamarrage réalisées dans le respect des normes de sécurité, protégeant les bornes et les défenses de quai.",
      "• Coordination Radio : Liaison constante avec le pilote et la capitainerie pour un positionnement millimétré du navire.",
      "2. Maintenance et Salubrité des Infrastructures",
      "La propreté d'un quai est le premier indicateur de sécurité opérationnelle. Nos équipes assurent un environnement de travail impeccable.",
      "• Politique Clean-Quay : Nettoyage systématique des zones de travail avant et après chaque escale (évacuation des résidus, bois d'arrimage, déchets).",
      "• Entretien Courant : Surveillance de l'état des quais et signalement immédiat des besoins de maintenance (éclairage, défenses, marquage au sol).",
      "3. Gestion Dynamique des Zones de Stockage",
      "Nous maximisons la rentabilité de chaque mètre carré de vos terre-pleins.",
      "• Sectorisation Stratégique : Organisation des zones de stockage par type de fret pour optimiser les flux de circulation.",
      "• Gestion des Flux Terre-Mer : Interface entre les opérations de levage (grues/portiques) et les zones d'entreposage pour éviter toute congestion.",
      "• Traçabilité & Inventaire : Suivi rigoureux des marchandises en attente sur vos surfaces de stockage."
    ]
  },
  "service-pi": {
    title: "Service P&I (Protection & Indemnity)",
    subtitle: "Protection & Représentation des Intérêts Une gestion rigoureuse des risques et des sinistres maritimes.",
    image: "/PI-IMAGE.png",
    content: [
      "Protection & Représentation des Intérêts : Une gestion rigoureuse des risques et des sinistres maritimes. En tant qu'intermédiaire privilégié entre les Clubs P&I, les armateurs et les autorités locales, l'Agence de l'Ogooué agit comme votre représentant local pour protéger vos intérêts financiers et juridiques en cas d'incident.",
      "1. Assistance aux Correspondants P&I",
      "Nous servons de point de contact local pour faciliter les interventions des représentants des Clubs :",
      "• Coordination d'urgence : Assistance immédiate en cas d'accident, de collision ou d'avarie majeure.",
      "• Logistique d'expertise : Organisation du transport et de l'accès à frontière pour les experts (surveyors) et les avocats maritimes.",
      "2. Gestion des Réclamations",
      "Nous vous assistons dans la gestion des litiges courants liés à l'exploitation du navire :",
      "• Dommages à la cargaison : Constats, suivi du déchargement et gestion des réserves.",
      "• Pollution maritime : Interface avec les autorités en cas d'incident lié à la convention MARPOL.",
      "• Dommages aux installations portuaires : Évaluation et médiation lors de contacts avec les quais ou les grues.",
      "• Gestion des hospitalisations et rapatriements : Prise en charge des formalités administratives liées à la MLC 2006.",
      "3. Enquêtes et Constats",
      "Nous organisons des expertises indépendantes pour documenter les faits :",
      "• Draft Surveys & Bunker Surveys : Contrôle des poids et des hydrocarbures.",
      "• Condition Surveys : État des lieux du navire à l'entrée ou à la sortie de la flotte (On-hire / Off-hire)."
    ]
  },
  "consignation": {
    title: "Consignation de Navires",
    subtitle: "Nos services d'agents shippings et de manutention couvrent l'ensemble des besoins opérationnels pour la gestion des navires et des cargaisons, en assurant sécurité, efficacité et conformité aux normes maritimes.",
    image: "/WhatsApp-Immage-20h26-03-05-at-21.43.33.jpeg",
    content: [
      "Nos services d'agents shippings et de manutention couvrent l'ensemble des besoins opérationnels pour la gestion des navires et des cargaisons, en assurant sécurité, efficacité et conformité aux normes maritimes.",
      "Nos Services :",
      "• Fouilles des navires : Inspection complète pour garantir la sécurité et la conformité aux réglementations.",
      "• Service de manutention : Gestion efficace du chargement, du déchargement et du déplacement des marchandises.",
      "• Assistance au navire et à l'équipage (Husbandry) : Soutien logistique et opérationnel complet aux équipes à bord.",
      "• Gestion administrative des navires : Prise en charge rigoureuse des formalités portuaires et réglementaires.",
      "• Suivi des opérations de chargement et déchargement : Supervision continue pour assurer la précision et la sécurité des opérations.",
      "• Coordination des opérations de manutention : Liaison fluide entre les équipes de quai et le navire pour un flux sans encombre."
    ]
  },
  "plongee-professionnelle": {
    title: "Plongée Professionnelle & Maintenance Sous-Marine",
    subtitle: "Notre équipe de plongeurs professionnels et de techniciens certifiés intervient dans les environnements maritimes les plus exigeants pour garantir la continuité de vos opérations et la sécurité de vos infrastructures.",
    image: "/Ccapture décran 2026-08-17 213235.jpg",
    content: [
      "Notre équipe de plongeurs professionnels et de techniciens certifiés intervient dans les environnements maritimes les plus exigeants pour garantir la continuité de vos opérations et la sécurité de vos infrastructures.",
      "1. Inspections et Expertises Sous-Marines",
      "• Visuelles et NDT (Contrôles non destructifs) : Inspection rigoureuse des œuvres vives des navires, des soudures et des structures métalliques immergées.",
      "• Rapports d'expertise : Fourniture de comptes rendus détaillés (photos et vidéos HD) pour évaluer l'état des ouvrages (quais, piles de ponts, émissaires).",
      "2. Maintenance et Travaux Portuaires",
      "• Maintenance des ouvrages : Entretien et réparation des défenses de quai, des anodes sacrificielles et des batardeaux.",
      "• Nettoyage de coques : Déracinage et brossage des œuvres vives pour optimiser l'hydrodynamisme et réduire la consommation de carburant des navires.",
      "3. Interventions d'Urgence et Secours",
      "• Dégagement d'hélices : Intervention rapide en cas d'emmêlement de filets, de câbles ou de cordages sur les propulseurs.",
      "• Colmatage et assistance d'urgence : Sécurisation de navires en avarie nécessitant une intervention technique sous la ligne de flottaison."
    ]
  },
  "placement-personnel-naviguant": {
    title: "Placement et Gestion du Personnel Naviguant",
    subtitle: "Dans un secteur maritime en constante évolution, la compétence et la fiabilité de l'équipage constituent les véritables piliers de la sécurité en mer et de la rentabilité de vos opérations.",
    image: "/WjhatsApp-Image-2026-03-05-at-21.43.35-2.jpeg",
    content: [
      "Dans un secteur maritime en constante évolution, la compétence et la fiabilité de l'équipage constituent les véritables piliers de la sécurité en mer et de la rentabilité de vos opérations.",
      "Nous structurons des réseaux logistiques fluides et performants pour relier les centres de production aux marchés de consommation.",
      "Sécurité, traçabilité et ponctualité sont au cœur de nos engagements opérationnels.",
      "Nous proposons des solutions de crewing sur mesure, adaptées aux besoins des armateurs et des gestionnaires de navires.",
      "1. Recrutement et Sélection Rigoureuse : Nous identifions les meilleurs profils pour chaque type de navire (remorqueurs, navires de servitude offshore, cargos, supply boats).",
      "Vérification de la validité des titres : Contrôle systématique des brevets (STCW), des certificats de sécurité et des livrets professionnels.",
      "Évaluation technique : Tests de compétences spécifiques selon le rang (Officiers de pont, Officiers mécaniciens, Maistrance et Équipage).",
      "Contrôle d'aptitude médicale : Vérification rigoureuse des certificats médicaux d'aptitude à la navigation.",
      "2. Placement et Gestion Contractuelle : Nous simplifions vos démarches administratives en assurant une liaison fluide entre les marins et les armateurs.",
      "Établissement des contrats d'engagement maritime : Conformité stricte avec la législation locale et les conventions internationales (MLC 2006).",
      "Gestion des relèves : Planification et coordination logistique pour garantir la continuité du service à bord.",
      "Suivi de carrière : Mise à jour continue des dossiers des marins pour anticiper les renouvellements de certificats.",
      "3. Spécialisation Offshore et Portuaire : Grâce à notre expertise locale, nous disposons d'un vivier de marins qualifiés pour des opérations spécifiques.",
      "Personnel de pont et machine pour les opérations de remorquage et d'assistance.",
      "Équipes spécialisées pour le secteur pétrolier et gazier offshore.",
      "Cuisiniers et personnel hôtelier formés aux exigences rigoureuses de la vie en mer.",
      "4. Formation et Mise à Niveau : Pour maintenir un haut niveau de performance, nous accompagnons nos marins dans l'identification des besoins en formation continue.",
      "La sensibilisation accrue à la sécurité (HSE) et à la protection de l'environnement marin.",
      "La maîtrise de l'anglais technique maritime pour les équipages opérant dans un contexte international.",
      "Nos Engagements : Conformité MLC 2006, Réactivité et Qualité."
    ]
  },
  "manutention-onshore-offshore": {
    title: "Manutention Onshore & Offshore",
    subtitle: "Stevedoring & Acconage",
    image: "/manutention-des-navires.jpg",
    content: [
      "Maillon essentiel de la chaîne logistique maritime, notre service de stevedoring assure une interface rapide et sécurisée entre le navire et la terre. Nous combinons expertise technique, main-d'œuvre qualifiée et équipements adaptés pour optimiser le temps d'escale de vos navires.",
      "1. Chargement et Déchargement de Navires : Nous intervenons sur différents types de cargaisons avec une maîtrise totale des cadences.",
      "Marchandises Conventionnelles (Breakbulk) : Manipulation de sacs, caisses, palettes et colis divers.",
      "Charges Lourdes et Projets Industriels : Expertise spécifique pour le levage d'engins, de structures métalliques et de colis hors gabarit.",
      "Vracs Solides : Opérations de déchargement de minerais, matériaux de construction ou produits agricoles.",
      "2. Saisissage et Arrimage (Lashing) : La sécurité de la marchandise durant la traversée est notre priorité.",
      "Calcul d'arrimage : Optimisation de l'espace en cale ou sur le pont tout en respectant la stabilité du navire.",
      "Saisissage professionnel : Utilisation de matériel certifié (chaînes, sangles, ridoirs) pour immobiliser parfaitement les cargaisons.",
      "Protection des marchandises : Pose de calages et de protections pour prévenir tout dommage pendant le transport.",
      "3. Gestion des Opérations de Quai : Nous fluidifions le passage portuaire pour éviter les congestions.",
      "Réception et livraison : Contrôle rigoureux des marchandises à l'entrée et à la sortie de la zone sous douane.",
      "Pointage et Tally : Inventaire précis et rapport de dommages (Survey) en temps réel pour une transparence totale.",
      "Transfert Horizontal : Acheminement efficace entre le pied de grue et les zones de stockage ou les camions.",
      "4. Expertise en Manutention Spécialisée : Nos dockers et chefs de chantier sont formés aux spécificités du terrain.",
      "Utilisation d'engins de levage : Grues de bord, grues de quai et chariots élévateurs de forte capacité.",
      "Coordination de bord : Liaison constante entre le bord (Second Capitaine) et la terre pour un plan de chargement optimal.",
      "Nos Engagements de Performance : Productivité, Zéro Dommage et Disponibilité 24/7."
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
          <Link href="/secteur-activite" className="text-blue-400 hover:underline text-sm font-semibold">
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
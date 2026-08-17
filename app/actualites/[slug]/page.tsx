import Link from "next/link";
import { notFound } from "next/navigation";
import { actualitesData } from "../page";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ActualiteDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  // On cherche l'article qui correspond au slug dans notre liste d'actualités
  const article = actualitesData.find((art) => art.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header de l'article */}
      <section className="bg-[#0a1b3d] text-white py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link href="/actualites" className="text-sm uppercase tracking-widest text-blue-400 font-semibold hover:underline">
            ← Retour aux actualités
          </Link>
          <div className="flex items-center gap-3 text-xs text-blue-300 font-semibold uppercase tracking-wider">
            <span>{article.tag}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">{article.title}</h1>
        </div>
      </section>

      {/* Contenu de l'article */}
      <section className="py-16 px-6 max-w-4xl mx-auto space-y-8 flex-1 w-full">
        <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-md">
          <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p className="font-medium text-xl text-[#0a1b3d]">{article.excerpt}</p>
          <p>
            Ogooue Groupe continue de renforcer sa position stratégique grâce à des initiatives d'envergure, alignées sur les attentes du marché mondial et les standards d'excellence les plus stricts.
          </p>
          <p>
            Cette démarche s'inscrit dans une vision à long terme visant à moderniser durablement nos infrastructures et à offrir une valeur ajoutée incontestable à l'ensemble de nos partenaires et clients.
          </p>
        </div>

        <div className="pt-8 border-t border-gray-200 flex justify-between items-center">
          <Link
            href="/actualites"
            className="text-[#0a1b3d] font-semibold hover:underline"
          >
            ← Voir toutes les autres actualités
          </Link>
          <Link
            href="/contact"
            className="bg-[#0a1b3d] text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-900 transition text-xs"
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
}
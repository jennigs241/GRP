/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ceci génère un dossier /out statique
  images: {
    unoptimized: true, // Nécessaire car le système d'optimisation d'image de Next.js ne fonctionne pas sur GH Pages
  },
}
export default nextConfig;
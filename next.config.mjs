/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Disable Next.js image optimization for GitHub Pages
  },
};

export default nextConfig;

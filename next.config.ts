import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ This ignores ESLint errors during build
  },
};

export default nextConfig;

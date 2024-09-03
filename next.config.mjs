/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "btispygjrfnfgfcchzti.supabase.co",
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "emjijxevakkygsqlkwrp.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;

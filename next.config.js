/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      // LOCAL DEV
      {
        protocol: "http",
        hostname: "localhost",
        port: "5001",
        pathname: "/uploads/**",
      },

      // PRODUCTION - HTTP
      {
        protocol: "http",
        hostname: "axies.uz",
        pathname: "/uploads/**",
      },

      // PRODUCTION - HTTPS (future-proof)
      {
        protocol: "https",
        hostname: "axies.uz",
        pathname: "/uploads/**",
      },
    ],
  },

  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_API_GRAPHQL_URL: process.env.NEXT_PUBLIC_API_GRAPHQL_URL,
    NEXT_PUBLIC_WS_URL: process.env.NEXT_PUBLIC_WS_URL,
  },
};

module.exports = nextConfig;

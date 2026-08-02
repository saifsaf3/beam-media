import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "beam-media.vercel.app" }],
        destination: "https://beammedia.agency/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

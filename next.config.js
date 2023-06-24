/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/main",
        permanent: true,
      },
    ];
  },
  images: { remotePatterns: [{ protocol: "https", hostname: "i.postimg.cc" }] },
};

module.exports = nextConfig;

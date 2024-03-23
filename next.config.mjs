/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "media.licdn.com",
        protocol: "https",
        port: "443",
      },
      {
        hostname: "www.hostinger.com",
        protocol: "https",
        port: "443",
      },
      {
        hostname: "s3-alpha.figma.com",
        protocol: "https",
        port: "443",
      },
      {
        hostname: "repository-images.githubusercontent.com",
        protocol: "https",
        port: "443",
      },
      {
        hostname: "5.imimg.com",
        protocol: "https",
        port: "443",
      },
      {
        hostname: "149842033.v2.pressablecdn.com",
        protocol: "https",
        port: "443",
      },
    ],
  },
};

export default nextConfig;

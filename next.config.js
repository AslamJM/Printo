/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "flowbite.s3.amazonaws.com",
      "bit.ly",
      "th.bing.com",
      "uploadthing.com",
      "files.stripe.com",
    ],
  },
  experimental: {
    esmExternals: false,
  },
};

module.exports = nextConfig;

// import nextPwa from "next-pwa"

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//       reactStrictMode: true,
//       images: {
//             domains: ["image.kalbelajobs.com", "lh3.googleusercontent.com", "d2vyhi5ouo1we3.cloudfront.net", "i.ibb.co", "kalbelajobs.com", "yt3.googleusercontent.com", "img.freepik.com"],
//       },
//       env: {
//             NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL,
//       },
//       eslint: {
//             ignoreDuringBuilds: true,
//       },
// }

// // Wrap nextConfig with nextPwa
// export default nextPwa({
//       dest: "public",
//       register: true,
//       skipWaiting: true,
//       disable: process.env.NODE_ENV === "development",
//       mode: "production",
// })(nextConfig)


import nextPwa from "next-pwa"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "image.kalbelajobs.com",
        port: "",
        pathname: "/api/v1/image/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "kalbelajobs.com",
      },
      {
        protocol: "https",
        hostname: "d2vyhi5ouo1we3.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "yt3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "image.kalbelajobs.com",
      },
    ],
  },
  env: {
    NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

// Wrap nextConfig with nextPwa
export default nextPwa({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  mode: "production",
})(nextConfig)

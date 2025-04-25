// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // whenever someone does `import ... from "@react-three/fiber/jsx-runtime"`,
      // point it at react/jsx-runtime instead:
      "@react-three/fiber/jsx-runtime": require.resolve("react/jsx-runtime"),
    };
    return config;
  },
};

export default nextConfig;

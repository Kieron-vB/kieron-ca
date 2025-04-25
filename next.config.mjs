// next.config.mjs
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@react-three/fiber/jsx-runtime": require.resolve("react/jsx-runtime")
    };
    return config;
  },
};

export default nextConfig;

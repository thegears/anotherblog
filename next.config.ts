import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["10.80.15.247"],
};

export default withNextIntl(nextConfig);

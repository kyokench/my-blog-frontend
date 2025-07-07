/** @type {import('next').NextConfig} */
const nextConfig = {
  // ───────────────────────────────
  // 共通設定
  // ───────────────────────────────
  reactStrictMode: true,

  // ───────────────────────────────
  // ビルド中の型エラー / ESLint エラーで
  // デプロイが止まらないようにするオプション
  // ───────────────────────────────
  typescript: {
    ignoreBuildErrors: true,   // TS エラーを無視してビルド続行
  },
  eslint: {
    ignoreDuringBuilds: true,  // ESLint エラーを無視してビルド続行
  },
};

module.exports = nextConfig;

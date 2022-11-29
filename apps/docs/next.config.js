const path = require("path");

module.exports = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["ui"],
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};

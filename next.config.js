const withMdxEnhanced = require("next-mdx-enhanced");
const rehypePrism = require("@mapbox/rehype-prism");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");

module.exports = withMdxEnhanced({
  layoutPath: "src/layouts",
  defaultLayout: true,
  rehypePlugins: [rehypePrism],
})({
  pageExtensions: ["mdx", "tsx"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    return config;
  },
});

module.exports = withCSS(
  withLess(
    withImages(
      withSass({
        env: {
          ANY_ENV_KEY: "ANY_ENV_VARIABLE",
        },
      })
    )
  )
);

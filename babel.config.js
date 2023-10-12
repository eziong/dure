module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
          alias: {
            "@app": "./app",
            "@components": "./src/components",
            "@models": "./src/models",
            "@redux": "./src/redux",
            "@screens": "./src/screens",
            "@interfaces": "./src/interfaces",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};

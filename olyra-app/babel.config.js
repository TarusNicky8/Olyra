module.exports = {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@context': './src/context',
            '@screens': './src/screens',
            '@components': './src/components',
            '@theme': './src/theme',
          },
        },
      ],
    ],
  };
  
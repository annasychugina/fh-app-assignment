module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      development: {
        plugins: ['babel-plugin-styled-components'],
      },
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};

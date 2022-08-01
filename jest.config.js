module.exports = {
  preset: 'jest-expo',
  testMatch: ['**/__tests__/*.test.(ts|tsx)'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jestFileTransformer.js',
  },
};

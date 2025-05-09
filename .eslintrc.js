module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'react-native/no-inline-styles': 'off',
    'no-unused-vars': [
      'warn',
      {argsIgnorePattern: '^_', varsIgnorePattern: '^_'},
    ],
  },
  'Disable ESLint unused-vars': {
    prefix: 'eslint-off-unused',
    body: ['// eslint-disable-next-line no-unused-vars'],
    description: 'Disable ESLint unused vars warning',
  },
};

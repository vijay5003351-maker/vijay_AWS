export default [
  {
    files: ['server/**/*.js'], // only check .js files inside server directory
    rules: {
      semi: 'error',
      'no-unused-vars': 'warn', // warn if variables are unused
    },
  },
];
/** @type {import("prettier").Config} */
const config = {
  // eslint-disable-next-line no-undef
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  tailwindFunctions: ['clsx'],
  trailingComma: 'all',
  tabWidth: 2,
  printWidth: 100,
  semi: true,
  singleQuote: true,
  endOfLine: 'auto',
};

// eslint-disable-next-line no-undef
module.exports = config;

module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    mode: 'extends',
    configure: {
      module: {
        rules: [
          {
            test: /\.html$/,
            use: 'html-loader',
          },
        ],
      },
    },
  },
};

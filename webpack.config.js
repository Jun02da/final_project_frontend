module.exports = {
  module: {
    rules: [
      // Sass 파일 로더 설정
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};

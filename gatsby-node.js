exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      test: /@typeform/,
      loader: 'null-loader',
    })
  }
}
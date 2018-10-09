const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/*.js',
      'spec/*spec.js'
    ],
    webpack: webpackConfig,
    exclude: [
    ],
    preprocessors: {
      'src/*.js': ['webpack', 'sourcemap'],
      'spec/*spec.js': ['webpack', 'sourcemap']
    },
    plugins: [
      'karma-jquery',
      'karma-webpack',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-safari-launcher',
      'karma-jasmine-html-reporter',
      'karma-sourcemap-loader'
    ],
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'Safari'],
    singleRun: false,
    concurrency: Infinity
  })
}

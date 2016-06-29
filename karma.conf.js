// Karma configuration
// Generated on Thu Jun 23 2016 14:29:55 GMT+1000 (AEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
        { pattern: 'spec.bundle.js', watched: false }
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'spec.bundle.js': ['webpack', 'sourcemap']
    },

    webpack :{
        devtool: 'inline-source-map',
        module: {
            loaders: [
                /* add the appropriate loaders */
                /* almost the same as the webpack.config */
                { test: /\.html$/, loader: 'raw' },
                { test: /\.less$/, loader: 'style!css!less' },
                { test: /\.css/, loader: 'style!css' },
                { 
                    test: /\.js$/,
                    loader: 'babel', 
                    exclude: [/client\/lib/, /node_modules/],
                    query: {
                      cacheDirectory: true,
                      presets: ['es2015', 'stage-2']
                    } 
                   }
            ]
        }
    },

    webpackServer: {
        noInfo: true
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
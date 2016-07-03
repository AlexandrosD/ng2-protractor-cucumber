// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/docs/referenceConf.js

exports.config = {

  framework: 'custom',
	frameworkPath: require.resolve('protractor-cucumber-framework'),
	useAllAngular2AppRoots: true,
	specs: [
		'../e2e/**/*.feature'
	],
	cucumberOpts: {
		require: [
			'../e2e/**/*.steps.ts'
		],
    format: 'json:./e2e/protractor-cucumber-report.json',
		tags: '~@ignore'
	},

  allScriptsTimeout: 11000,
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
  },
  onPrepare: function() {
    // 
  }
};

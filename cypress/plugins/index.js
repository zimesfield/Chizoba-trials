/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)


 

// eslint-disable-next-line no-unused-vars
//module.exports = (on, config) => {
  
 /* module.exports = (on) => {
    const options = {
      browserify({
        browserifyOptions: {
          "extension" ;
       //   "extensions" :".ts"
       //   "plugin" : "tsify"
          
        }
      })
    }
  
    on('file:preprocessor', browserify(options))
  }*/

  const browserify = require('@cypress/browserify-preprocessor')
const cucumber = require('cypress-cucumber-preprocessor').default
const resolve = require('resolve')

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

    const options = {
        ...browserify.defaultOptions,
        typescript: resolve.sync('typescript', { baseDir: config.projectRoot})
    }

    on('file:preprocessor', cucumber(options))
}

 
/*module.exports = (on ,config ) => {
  const options={
      ...browserify.defaultOptions
  }
 
}

module.exports = (on) => {
  const options = browserify.defaultOptions;
  options.browserifyOptions.plugin.onshift ([tsify])
    
  on('file:preprocessor', browserify())
  */



  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config


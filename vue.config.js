/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'es',
                // style: true
                style: name => `${name}/style/less`
              })
            ]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        })
        return options
      })
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          blue: '#48c5d2',
          'font-size-sm': '13px',
          'font-size-md': '15px',
          'font-size-lg': '17px',
          'button-primary-background-color': '#48c5d2'
        }
      }
    }
  }
}

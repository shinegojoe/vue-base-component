module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "./src/sass/mixin_test"'
      }
    }
  }
}

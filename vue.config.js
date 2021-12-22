// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  pages: {
    landingpage: {
      entry: './src/pages/TlandingPage/main.js',
      template: 'public/index.html',
      title: 'landingpage',
      chunks: ['chunk-vendors', 'chunk-common', 'landingpage']
    },
    Home: {
      entry: './src/pages/Home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'Home']
    },
    Home2: {
      entry: './src/pages/Home2/main.js',
      template: 'public/index.html',
      title: 'Home2',
      chunks: ['chunk-vendors', 'chunk-common', 'Home2']
    },
    login: {
      entry: './src/pages/TtelaLogin/main.js',
      template: 'public/index.html',
      title: 'login',
      chunks: ['chunk-vendors', 'chunk-common', 'login']
    },
    telaadmin: {
      entry: './src/pages/ADMtelaAdmin/main.js',
      template: 'public/index.html',
      title: 'telaadmin',
      chunks: ['chunk-vendors', 'chunk-common', 'telaadmin']
    },
    listapacientes: {
      entry: './src/pages/MlistaPacientes/main.js',
      template: 'public/index.html',
      title: 'listapacientes',
      chunks: ['chunk-vendors', 'chunk-common', 'listapacientes']
    },
    downloadlaudos: {
      entry: './src/pages/PtelaDownloadLaudos/main.js',
      template: 'public/index.html',
      title: 'downloadlaudos',
      chunks: ['chunk-vendors', 'chunk-common', 'downloadlaudos']
    },
    upload: {
      entry: './src/pages/MtelaUpload/main.js',
      template: 'public/index.html',
      title: 'upload',
      chunks: ['chunk-vendors', 'chunk-common', 'upload']
    }
  }
}

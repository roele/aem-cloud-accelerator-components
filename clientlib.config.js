const path = require('path');

const BUILD_DIR = path.join(__dirname, 'dist', 'aem-cloud-accelerator-components');

// const CLIENTLIB_DIR = path.join(
//   __dirname,
//   '..',
//   'ui.apps',
//   'src',
//   'main',
//   'content',
//   'jcr_root',
//   'apps',
//   'acme-app',
//   'clientlibs'
// );

const CLIENTLIB_DIR = path.join(
  __dirname,
  'aem',
  'clientlibs'
);

// const entrypoints = [
//   path.join(BUILD_DIR, 'aem-cloud-accelerator-components.js')
// ];

// Config for `aem-clientlib-generator`
module.exports = {
  context: BUILD_DIR,
  clientLibRoot: CLIENTLIB_DIR,
  libs: {
    name: 'clientlib-cpa',
    allowProxy: true,
    categories: ['acme-app.cpa'],
    serializationFormat: 'xml',
    cssProcessor: ['default:none', 'min:none'],
    jsProcessor: ['default:none', 'min:none'],
    // assets: {
    //   // copy entrypoints to 'js' directory with entry in 'js.txt'
    //   js: {
    //     files: entrypoints.filter(fileName => fileName.endsWith('.js')),
    //     flatten: false
    //   },

    //   // copy all other files into the `js` directory
    //   resources: {
    //     base: 'js',
    //     files: ['**/*.*'],
    //     flatten: false,
    //     ignore: [entrypoints]
    //   }
    // },
    assets: {
      // copy all files into the `resources` directory
      resources: {
        files: ['**/*.*'],
        flatten: false,
      }
    }
  }
};

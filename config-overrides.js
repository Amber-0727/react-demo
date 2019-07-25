// 针对antd实现按需打包： 根据import来打包
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
  // do stuff with the webpack config...
  fixBabelImports('import', {
    libraryName: 'antd',
    ibraryDirectory: 'es',
    style: true, // true时 打包时默认为less
  }),
  // 使用less-loader 对antd源码中的less变量 进行重新指定
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
)
/**
 * create-react-app config
 *
 */
const path = require('path')
const CracoLessPlugin = require('craco-less');

const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
    // 配置craco插件
    plugins: [
        {
            // 配置less
            plugin: CracoLessPlugin
        },
    ],
    // 配置webpack
    webpack: {
        // 配置路径别名
        alias: {
            '@': resolve('src'),
            'components': resolve('src/components'),
            'utils': resolve('src/utils')
        }
    }
}
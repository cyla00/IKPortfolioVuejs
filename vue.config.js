var path = require('path')

module.exports = {
    outpudDir: path.resolve(__dirname, '../server/public'),
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000'
            }
        }
    }
}
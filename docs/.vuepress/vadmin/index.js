const {
    resolve
} = require('path')
console.log(resolve(__dirname, 'enhanceApp.js'))
module.exports = (options, ctx) => {
    return {
        enhanceAppFiles: resolve(__dirname, 'enhanceApp.js')
        // enhanceAppFiles: './enhanceApp.js'
    }
}
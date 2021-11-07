const superStatic = require("superstatic")
const browserSync = require("browser-sync")

browserSync.init({

server:{middleware: [superStatic({stack:'strict'})]},
port: 3474,
watch: true,
files: ['./src/*.html', './src/*.css', './src/*.html']


})
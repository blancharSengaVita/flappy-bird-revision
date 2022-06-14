// webpack.mix.js

let mix = require('laravel-mix');

mix.ts('src/ts/Main.ts', 'js').sourceMaps()
    .sass('src/scss/main.scss', 'css').sourceMaps()
    .setPublicPath('dist').setResourceRoot('../')
    .browserSync({
        proxy: "http://flappy-bird-revision.test/"
    });


const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .then(() => {
        let fs = require('fs'),
            newJson = {},
            mixManifestFile = path.resolve(__dirname) + '/public/mix-manifest.json',
            mixManifest = require(mixManifestFile);

        for(var key in mixManifest) {
            let newKey = key.substring(1);
            newJson[newKey] = mixManifest[key];
        }

        fs.writeFile(mixManifestFile, JSON.stringify(newJson));
    });

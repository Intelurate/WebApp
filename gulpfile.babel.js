import path from 'path'

import gulp from 'gulp';
import run from 'gulp-run';
import webpack from 'webpack';
import gutil from "gulp-util";
import gls from 'gulp-live-server';
import env from 'gulp-env';
import _ from 'underscore';
import mocha from 'gulp-mocha';
import through from "through2";
import yaml from 'gulp-yaml';
import log from 'fancy-log';
import babel from 'gulp-babel';

let buildPath = 'bin';

let srcPath = 'server';

gulp.task('webpack:build-jsx', ['transpile-watch'], (callback) => {

    var webpackConfig = require('./webpack.config');

    // add minification if using minified environment
    // if (minifiedEnvironments.indexOf(gutil.env.node_env) !== -1)

    //webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());

    return webpack(webpackConfig, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            chunks: false,
            colors: true
        }));
        callback();
    });
});


gulp.task('watch:client', ['webpack:build-jsx'], () => {
    var server = gls.static('public', 3001); 
    server.start();
    server.start.apply(server);
    gulp.watch('./reactApp/**/*', ['webpack:build-jsx']);
    gulp.watch('./loginApp/**/*', ['webpack:build-jsx']);
});


var watchServer = (server) => {
    gulp.watch([`${buildPath}/**/*.js`], (data) => {
        server.start.apply(server);
    });
};

gulp.task('server-start', ['watch:client'], () =>{
    //process.env.NODE_PATH = '/Users/eddie/Documents/WebApps/SupplyChain/src/modules/';
    var server = gls([`${buildPath}/server.js`]);
    server.start();
    watchServer(server);
});

gulp.task('transpile-watch', ['transpile'], () => {
    gulp.watch([`${srcPath}/**/*.js`], (data) => {
        let path = `${buildPath}${data.path.split(srcPath)[1]}`;
        let folderpath = [];
        path = path.split('/');    
        path.forEach((v,i) => {
            if( i < path.length-1 ) {
                folderpath.push(v+"/");       
            }
        });
        folderpath = folderpath.join('');
        gulp.src([data.path])
        .pipe(babel())
        .pipe(gulp.dest(folderpath));
    })

});

gulp.task('transpile', (done) => {
        gulp.src([`${srcPath}/**/*.js`])
        .pipe(babel())
        .pipe(gulp.dest(buildPath))
        .on('end', done);
});


gulp.task('default', ['transpile', 'transpile-watch', 'webpack:build-jsx', 'watch:client', 'server-start' ]);

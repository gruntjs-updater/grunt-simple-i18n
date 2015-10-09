/*
 * grunt-simple-i18n
 *
 *
 * Copyright (c) 2015 Björn Hase
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    var translator = require('./lib/translator').init(grunt),
        i18nHelper = require('./lib/i18nHelper').init(grunt),
        _ = require('lodash');

    grunt.registerMultiTask('simpleI18n', '', function() {

        this.files.forEach(function(file) {

            // source base path
            var sourceFileBasePath = '',
                i18nData = [],
                i18nFiles = grunt.file.expand({}, file.i18n + '/*.json');

            // check if cwd used
            if (file.cwd !== undefined) {
                sourceFileBasePath = file.cwd + '/';
            }

            // filter for
            var sourceFiles = file.src.filter(function(path) {
                if (grunt.file.isDir(sourceFileBasePath + path)) {
                    return false;
                } else {
                    return true;
                }
            });

            // running trough translations files and append them
            i18nFiles.forEach(function(path) {
                i18nData = i18nHelper.append(i18nData, file.i18n, path);
            });

            // running i18nData to templates
            _.forOwn(i18nData, function(data, language) {
                sourceFiles.forEach(function(sourceFilePath) {
                    var content = grunt.file.read(sourceFileBasePath + sourceFilePath),
                        destinationFilePath = file.dest + '/' + language + '/' + sourceFilePath;

                    content = translator.replace(data, content);
                    grunt.file.write(destinationFilePath, content);
                });

                grunt.log.writeln('"' + language + '" has created');
            });
        });
    });

};
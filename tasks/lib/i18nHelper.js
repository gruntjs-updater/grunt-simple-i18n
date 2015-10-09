/*
 * grunt-simple-i18n
 *
 *
 * Copyright (c) 2015 Björn Hase
 * Licensed under the MIT license.
 */

 exports.init = function(grunt) {

     var exports = {};

     exports.append = function(i18n, i18nPath, path) {
         var meta = path.split('.'),
             namespace = 'default',
             language = meta[0].replace(i18nPath + '/', '');

         if (meta[1] !== 'json') {
             namespace = meta[1];
         }

         // if language not set, add init array
         if (i18n[language] === undefined) {
             i18n[language] = [];
         }

         // adding json to file
         i18n[language][namespace] = grunt.file.readJSON(path);

         return i18n;
     };

     return exports;
 };
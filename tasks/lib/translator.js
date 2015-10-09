/*
 * grunt-simple-i18n
 *
 *
 * Copyright (c) 2015 Björn Hase
 * Licensed under the MIT license.
 */

'use strict';

exports.init = function(grunt) {

    var exports = {};

    exports.replace = function(i18n, content) {
        return content.replace(/\[\[.+\]\]/g, function(match) {
            var keys = match.replace('[[', '').replace(']]', '').split(':'),
                value = '';

            // check if namespace is there if not set to "default"
            // reserve because namespace comes first
            if (keys[1] === undefined) {
                keys[1] = 'default';
                keys = keys.reverse();
            }

            // triming both keys
            keys[0] = keys[0].trim();
            keys[1] = keys[1].trim();

            // check for keys in i18n
            if (i18n[keys[0]][keys[1]] !== undefined) {
                value = i18n[keys[0]][keys[1]];
            }

            return value;
        });
    };

    return exports;
};
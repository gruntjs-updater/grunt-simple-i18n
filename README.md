# grunt-simple-i18n

> A Simple i18n Translator for Html-Files

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-simple-i18n --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-simple-i18n');
```

### Usage Examples

```js
simple_i18n: {
    main: {
        files: [
            {
                src: '**',
                cwd: 'app/views',
                dest: 'public/views',
                i18n: 'translations'
            }
        ]
    },
},
```

### Templates

```html
<button>[[ change ]]</button>
```

You can also use namespaces

´´´html
<button>[[ filter:change ]]</button>
```

### i18n-files

This Task only supports json-files.

## Example

```json
{
    "CHANGE" : 'Change Image'
}

```

## Naming

First Part of a Filename is the language. The Second is the Namespace, if you use it.

```js
/translation/de.json
/translation/de.filter.json
/translation/en.json
/translation/en.filter.json
```
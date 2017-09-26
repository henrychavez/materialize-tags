# Materialize Tags
[![Build Status](https://travis-ci.org/henrychavez/materialize-tags.svg?branch=master)](https://travis-ci.org/henrychavez/materialize-tags)
[![Dependency Status](https://gemnasium.com/badges/github.com/henrychavez/materialize-tags.svg)](https://gemnasium.com/github.com/henrychavez/materialize-tags)

Materialize Tags is a jQuery plugin providing a Material Design user interface for managing tags.

## Building
* npm install
* npm install -g gulp-cli
* gulp build

## Features
* Objects as tags
* Typeaheadjs: [CoreJavascript-Typeahead](https://github.com/corejavascript/typeahead.js)
* Designed for [Materialize](http://materializecss.com/)

## Dependencies
* Jquery: 3.2.\* => [download here](https://github.com/jquery/jquery/tree/3.2.1/dist)
* Typeaheadjs: 1.2.\* => [download here](https://github.com/corejavascript/typeahead.js/tree/1.2.1/dist)
* Materialize: 0.100.\* => [download here](https://github.com/Dogfalo/materialize/tree/v0.100.2/dist)


### Objects as tags
<b>Not just support strings!</b> This means you can use different values for a tag's label and value. Each tag also holds a reference to the object by which it was created, so by calling <code>$(element).materialtags('items')</code> an array of the original items is returned.

### Typehead support
Integrates with [Typeaheadjs](https://github.com/corejavascript/typeahead.js) for more flexibility 

## Contributors
* [Nicolas Gryman (ngryman)](https://github.com/ngryman) 
* [Jonathan DEKHTIAR (DEKHTIARJonathan)](https://github.com/DEKHTIARJonathan) 

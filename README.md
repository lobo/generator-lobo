# generator-lobo [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> The way I like the backend

## Installation

First, install [Yeoman](http://yeoman.io) and generator-lobo using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-lobo
```

Then generate your new project:

```bash
yo lobo
```

### Sub Generator Schema

Run the sub generator for schemas:

```
$ yo mongoose:schema "article|title:String,excerpt:String,content:String,published:Boolean,created:Date"
```

output:

    You're creating a schema for article
    With the fields: title,excerpt,content,published,created
       create routes/article.js
       create models/article.js
    starting request to schematic for test mock data...
       create test/test-article.js

## Getting To Know Yeoman

Yeoman has a heart of gold. He&#39;s a person with feelings and opinions, but he&#39;s very easy to work with. If you think he&#39;s too opinionated, he can be easily convinced. Feel free to [learn more about him](http://yeoman.io/).

## License

MIT © [Daniel Lobo](lobo.github.io)


[npm-image]: https://badge.fury.io/js/generator-lobo.svg
[npm-url]: https://npmjs.org/package/generator-lobo
[travis-image]: https://travis-ci.org/lobo/generator-lobo.svg?branch=master
[travis-url]: https://travis-ci.org/lobo/generator-lobo
[daviddm-image]: https://david-dm.org/lobo/generator-lobo.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/lobo/generator-lobo

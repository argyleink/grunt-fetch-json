## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-fetch-json --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('fetchJson');
```

## The "fetchJson" task
The goal here is simply to allow fetching of remote data sources for use in your app. A couple use cases include:
- Passing the data to a templated build sytem (jade, handlebars, etc), ultimately creating static sites that are data driven
- Taking work off your server and putting it into the build system
- Eliminating ajax spinners from your client code, aka thinning out the client

I'm sure the community will come up with plenty of other interesting use cases for this tool. Get creative!

### Overview
In your project's Gruntfile, add a section named `fetchJson` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  fetchJson: {
    options: {
      // Task-specific options go here.
    },
    your_files: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.method
Type: `String`
Default value: `'GET'`

A string value that is passed with the fetch request.

#### options.headers
Type: `Object`
Default value: `{}`

An object with keys and values you'd like passed with the fetch request.

#### options.body
Type: `Object`
Default value: `{}`

An object with keys and values you'd like passed with the fetch request.

#### options.parameters
Type: `Object`
Default value: `{}`

An object with keys and values you'd like appended to the request url.

###### More options can be found here [node-fetch](https://www.npmjs.com/package/node-fetch).

### Usage Examples

#### Default Options
In this example, the default options are used to grab some json and stash it in a local file.

```js
grunt.initConfig({
  fetchJson: {
    files: {
      'data/remote_data1.json': 'http://jsonplaceholder.typicode.com/posts/1'
    }
  },
})
```

#### Multiple File Options
In this example, we're fetching multiple files, in parallel.

```js
grunt.initConfig({
  fetchJson: {
    files: {
      'tmp/remote_data2.json': 'http://jsonplaceholder.typicode.com/posts/2',
      'tmp/remote_data3.json': 'http://jsonplaceholder.typicode.com/posts/3'
    }
  },
})
```

#### Fetch with parameters
Fetch json from an api with tokens or keys.

```js
grunt.initConfig({
  fetchJson: {
    options: {
      method: 'GET',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      },
      parameters: {
        access_token:   '555'
      }
    },
    files: {
      'tmp/shirts.json':  'https://yourapi.com/shirts',
      'tmp/pants.json':   'https://yourapi.com/pants'
    }
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 2015-12-04  v0.0.3  Improved readme
* 2015-12-03  v0.0.2  Improved naming convention
* 2015-12-02  v0.0.1  Initial release

## License
Copyright (c) 2015 Adam Argyle. Licensed under the MIT license.

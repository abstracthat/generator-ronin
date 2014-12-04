# Ronin generator

This is a Yeoman generator for [Ronin](https://github.com/vdemedes/ronin) to create CLI applications.

## Installation

```
$ npm install --global yeoman generator-ronin
```

## Available commands

### Application

To create new application, run `yo ronin` with application name as an argument.

```
$ yo ronin hello-world
```

This will create a folder `hello-world` and create a base for your application.

![](http://cl.ly/image/153M3B1T3t47/embed)


### Command

To create new command inside application, run `yo ronin:command` with command name as an argument.

```
$ yo ronin:command hello
```

This will create a file `hello.js` inside `commands` directory.

![](http://cl.ly/image/0V1g3q1F0k2u/embed)

## Tests

```
$ npm test
```

## License

Released under the MIT License.

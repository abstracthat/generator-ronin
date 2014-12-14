Command = require('ronin').Command

Hello = Command.extend
  desc: 'Command that says hello'  
  run: ->
    console.log('Hello!')

module.exports = Hello

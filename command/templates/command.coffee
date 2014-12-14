Command = require('ronin').Command

<%= name %> = Command.extend
  desc: 'Insert your description'
  run: ->
    console.log('<%= name %> command')

module.exports = <%= name %>

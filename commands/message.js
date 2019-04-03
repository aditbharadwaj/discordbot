const kick = require('../commands/kick');

module.exports = (bot, message) => {
  if (message.content.startsWith('!kick')) {
    return kick(message)
  }
}
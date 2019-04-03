

module.exports = (message) => {
    if (message.content === '!gandalf' ) {
        message.reply( ' All you have to decide is what to do with the time that is given to you.')
      }
      else if (message.content === '!newkid') {
        message.reply( ' ohh a new kid in town welcome welcome enjoy ur stay and follow rules :D  ')
      }
      else if (message.content === 'owner') {
        message.reply( ' Adit bharadwaj is the owner of this bot kudos! ')
      }
      
 }
/*bot.on('message', msg => {
    if (msg.content === '!gandalf' ) {
      msg.reply( ' All you have to decide is what to do with the time that is given to you.')
    }
  })
  bot.on('message', msg => {
    if (msg.content === '!newkid') {
      msg.reply( ' ohh a new kid in town welcome welcome enjoy ur stay and follow rules :D  ')
    }
  })*/
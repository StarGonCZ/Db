
module.exports = {
    name: 'greeting',
    description: 'will greet the user',
    execute(message, args) {
        message.channel.send('Hello friend! I am your personal helper, what can i help you with today?');
    }
}

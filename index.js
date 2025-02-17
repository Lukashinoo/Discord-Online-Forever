const Eris = require("eris");
const keep_alive = require('./keep_alive.js');

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("ready", () => {
    console.log("Bot ist online!");
    bot.editStatus("idle", {
        name: "Currently offline",
        type: 3 // 0 = Playing, 1 = Streaming, 2 = Listening, 3 = Watching
    });
});

bot.on("error", (err) => {
    console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord

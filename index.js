const Eris = require("eris");
const keep_alive = require('./keep_alive.js');

const bot = new Eris(process.env.token);

bot.on("ready", () => {
    console.log("Bot ist online!");
    
    // Setzt den Status auf "dnd" mit benutzerdefiniertem Status-Text
    bot.editStatus("dnd", {
        status: "Currently offline" // Benutzerdefinierter Status-Text
    });
});

bot.on("error", (err) => {
    console.error(err);
});

bot.connect();

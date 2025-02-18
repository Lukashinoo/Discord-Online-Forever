const Eris = require("eris");
const keep_alive = require('./keep_alive.js');

const bot = new Eris(process.env.token);

bot.on("ready", () => {
    console.log("Bot ist online!");
    
    // Setzt den Status auf "dnd" mit benutzerdefiniertem Status-Text
    bot.editStatus("dnd", {
        name: "Currently offline", // Benutzerdefinierter Status-Text
        type: 2 // 0 = spielt, 1 = streamt, 2 = hört zu, 3 = schaut, 5 = konkurriert
    });
});

bot.on("error", (err) => {
    console.error(err);
});

bot.connect();

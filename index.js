const Eris = require("eris");

// Ersetze 'YOUR_BOT_TOKEN' mit deinem Bot-Token
const bot = new Eris("token");

bot.on("ready", () => {
    console.log(`Logged in as ${bot.user.username}`);

    // Setzt den Status auf "DND" und zeigt "Currently offline" als benutzerdefinierten Status an
    bot.editStatus("dnd", { 
        name: "Currently offline", 
        type: 4 // 4 = Benutzerdefinierter Status
    });
});

bot.on("error", (err) => {
    console.error(err);
});

bot.connect(); // Bot verbindet sich mit Discord

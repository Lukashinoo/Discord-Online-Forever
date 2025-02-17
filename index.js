const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    
    // Setzt den Status auf "DND" (roter Punkt) und zeigt den benutzerdefinierten Status an
    client.user.setPresence({
        activities: [{ name: 'Currently offline', type: 4 }], // 4 = Benutzerdefinierter Status
        status: 'dnd', // "Bitte nicht stören" (roter Punkt)
    });
});

client.login('token');

import { Client, IntentsBitField } from 'discord.js';
import { Bot } from './bot';

(async () => {
    const client = new Client({
        intents: [
            IntentsBitField.Flags.Guilds,
            IntentsBitField.Flags.GuildMembers,
            IntentsBitField.Flags.GuildMessages
        ]
    });

    const bot = new Bot(client);

    await bot.registerCommands();
    await bot.registerEvents();
})();

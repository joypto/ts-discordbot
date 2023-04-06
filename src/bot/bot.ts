import { Client, REST, Routes } from 'discord.js';
import dotenv from 'dotenv';
import { commands } from './commands/mod';
import { events } from './events/mod';

dotenv.config();

export class Bot {
    constructor(public readonly client: Client) {
        this.client.login(process.env.TOKEN);
    }

    async registerCommands() {
        const registered = commands.map(command => command.data.toJSON());
        const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

        try {
            console.log(`Started refreshing ${registered.length} application (/) commands.`);

            await rest.put(
                Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
                {
                    body: registered
                }
            );

            console.log(`Successfully reloaded ${registered.length} application (/) commands.`);
        } catch (error) {
            console.error(error);
        }
    }

    async registerEvents() {
        for (const event of events) {
            if (event.once) {
                this.client.once(event.name, (...args) => event.execute(...args));
            } else {
                this.client.on(event.name, (...args) => event.execute(...args));
            }
        }
    }
}

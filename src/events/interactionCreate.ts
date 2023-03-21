import { Events, Interaction } from 'discord.js';
import { getCommand } from '../../src/commands';
import { Event } from '../../src/types/event';

export const interactionCommand: Event = {
    name: Events.InteractionCreate,
    execute: async (interaction: Interaction) => {
        if (!interaction.isCommand()) return;

        const command = getCommand(interaction.commandName);
        if (!command) return;

        try {
            await command.execute(interaction);
        } catch (e) {
            console.error(`Error executing ${interaction.commandName}`);
            console.error(e);
        }
    }
};

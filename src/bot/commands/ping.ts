import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import { Command } from '../types/command';

export const ping: Command = {
    data: new SlashCommandBuilder().setName('ping').setDescription('replies with pong'),
    execute: async (interaction: CommandInteraction) => {
        await interaction.reply('Pong!');
    }
};

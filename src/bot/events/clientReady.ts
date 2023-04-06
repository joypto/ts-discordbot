import { Client, Events } from 'discord.js';
import { Event } from '../types/event';

export const clientReady: Event = {
    name: Events.ClientReady,
    once: true,
    execute: async (client: Client) => {
        console.log(`Logged in as ${client.user.tag}!`);
    }
};

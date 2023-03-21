import { Events } from 'discord.js';

export type Event = {
    name: string;
    once?: boolean;
    execute: (...args: any[]) => Promise<void>;
};

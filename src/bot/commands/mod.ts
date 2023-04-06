import { Command } from '../types/command';
import { ping } from './ping';

export const commands = [ping];

export const getCommand = (commandName: string): Command => {
    return commands.find(command => command.data.name === commandName);
};

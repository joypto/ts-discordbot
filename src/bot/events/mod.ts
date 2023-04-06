import { interactionCommand } from './interactionCreate';
import { clientReady } from './clientReady';

export const events = [clientReady, interactionCommand];

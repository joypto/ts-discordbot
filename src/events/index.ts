import { interactionCommand } from './interactionCreate';
import { clientReady } from './ready';

export const events = [clientReady, interactionCommand];

import { MessageEvent, MessageEventContent } from 'matrix-bot-sdk';
import { CommandMatrixClient } from '..';
import { sendText } from '../util/util';

export async function quoteHandler(_roomId: string, event: MessageEvent<MessageEventContent>, client: CommandMatrixClient) {
  if (event.sender === await client.getUserId()) return;

  const year = new Date().getFullYear().toString().substring(2);
  const QUOTE_REGEX = new RegExp(`"(.+)" - <a href="https:\/\/matrix\.to\/#\/%40.*"> 2k${year}`);

  if (QUOTE_REGEX.test(event.textBody)) {
    const room = '!jNTkHGSAYrNPfoXxmL:iusearchbtw.nl';
    const text = `${event.sender}: ${event.textBody}`
    return await sendText(room, client, text);
  }
}
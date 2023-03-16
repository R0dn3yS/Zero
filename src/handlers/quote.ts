import { MessageEvent, MessageEventContent } from 'matrix-bot-sdk';
import { CommandMatrixClient } from '..';
import { mention, sendText } from '../util/util';

export async function quoteHandler(_roomId: string, event: MessageEvent<MessageEventContent>, client: CommandMatrixClient) {
  if (event.sender === await client.getUserId()) return;

  if (!event.raw.content['formatted_body']) return;
  const formatted_body = event.raw.content['formatted_body'];

  const year = new Date().getFullYear().toString().substring(2);
  const QUOTE_REGEX = new RegExp(`(&quot;)|".+(&quot;)|" - <a href="https:\/\/matrix\.to\/#\/(%40)|@.+">.*</a> 2k${year}`);

  if (QUOTE_REGEX.test(formatted_body)) {
    const room = '!jNTkHGSAYrNPfoXxmL:iusearchbtw.nl';
    const text = `${mention(event.sender, event.sender.split(':')[0].split('@')[1])}: ${formatted_body}`
    return await sendText(room, client, text);
  }
}
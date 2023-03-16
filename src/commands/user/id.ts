import { spawn } from 'child_process';
import { MessageEvent, MessageEventContent } from 'matrix-bot-sdk';
import { CommandMatrixClient } from '../..';
import { delay, getRoomDisplayName, sendText } from '../../util/util';

export default {
  name: 'id',
  description: 'Returns the users id',
  usage: '',
  category: 'user',
  admin: false,
  run: async (roomId: string, event: MessageEvent<MessageEventContent>, args: string[], client: CommandMatrixClient) => {
    const text = `Your user id is: ${event.sender}`;

    return await sendText(roomId, client, text);
  }
}
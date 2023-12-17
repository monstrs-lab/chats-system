import { Client }       from '@chats-system/client'
import { LocalStorage } from '@chats-system/client'

export const client = new Client('ws://localhost:3000', new LocalStorage())

import { Client, Message } from "discord.js";
import { MessageHandler } from "./message-handler";
import { handles } from './handles';

export class Bot {
    private client: Client;
    private readonly token: string;
    private messageHandler: MessageHandler;

    constructor(token: string) {
        this.client = new Client();
        this.token = token;
        this.messageHandler = new MessageHandler();
    }

    public listen(): Promise<string> {
        this.client.on('message', (message: Message) => {
            let firstWord = message.content.split(' ')[0];

            if(handles.includes(firstWord)) {
                console.log('handle this one')
    
                this.messageHandler.handle(message, firstWord).then(() => {
                    console.log("Response sent!");
                }).catch(() => {
                    console.log("Response not sent.")
                })
            }else {
                console.log('Ignoring certain messages')
                return;
            }
            
            // TODO: add monitoring (i.e. metrics on who uses it the most and for what, etc.)

        });
        return this.client.login(this.token);
    }
}
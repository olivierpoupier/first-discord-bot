import { Client, Message } from "discord.js";
import { MessageResponder } from "./services/message-responder";
import { handles } from './handles';

export class Bot {
    private client: Client;
    private readonly token: string;
    private messageResponder: MessageResponder;

    constructor(token: string) {
        this.client = new Client();
        this.token = token;
        this.messageResponder = new MessageResponder();
    }

    public listen(): Promise<string> {
        this.client.on('message', (message: Message) => {
            let firstWord = message.content.split(' ')[0];

            if(handles.includes(firstWord)) {
                console.log('handle this one')
    
                this.messageResponder.handle(message, firstWord).then(() => {
                    console.log("Response sent!");
                }).catch(() => {
                    console.log("Response not sent.")
                })
            }else {
                console.log('Ignoring bot message!')
                return;
            }
            
            // TODO: add monitoring (i.e. metrics on who uses it the most and for what, etc.)

        });
        return this.client.login(this.token);
    }
}
import {Message} from "discord.js";
import { resolve } from "path/posix";
import { isBreakOrContinueStatement } from "typescript";
import { MuteCommand } from "../commands/mute.command";
import { AffirmationService } from "./affirmation-service";
import { KanyeService } from "./kanye-quote-service";

export class MessageHandler {
  private affirmationService: AffirmationService;
  private kanyeService: KanyeService;

  constructor() {
    this.affirmationService = new AffirmationService();
    this.kanyeService = new KanyeService();
  }

  handle(message: Message, handle: string): Promise<Message | Message[] | void>{
    // TODO: add kanye quotes and insults depending on the message content
    switch (handle) {
      case "!affirmation": {
        return this.affirmationService.getAffirmation().then((affirmation) => {
          return message.channel.send(affirmation);
        });
      }
      case "!ye": {
        return this.kanyeService.getQuote().then((quote) => {
          return message.channel.send(quote);
        });
      }
      case "!fu": {
        if(message.mentions.members){
          // TODO: add insults for each user
        }else {
          // TODO: insult everyone
        }
      }
      case "!stfu": {
        if(message.mentions.members){
          message.mentions.members.forEach((member) => {
            const muteCmd = new MuteCommand(member);
            muteCmd.execute();
          });
        }

        return message.reply("Here you go, muted the dickhead");
      }
      default: {
        return message.channel.send("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
      }
    };
  }
}
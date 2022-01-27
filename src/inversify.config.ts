import "reflect-metadata";
import {Container} from "inversify";
import {TYPES} from "./types";
import {Bot} from "./bot";
import { Client } from "discord.js";
import { MessageResponder } from "./services/message-responder";
import { AffirmationService } from "./services/affirmation-service";
import { KanyeService } from "./services/kanye-quote-service";

let container = new Container();

container.bind<Bot>(TYPES.Bot).to(Bot).inSingletonScope();
container.bind<Client>(TYPES.Client).toConstantValue(new Client());
container.bind<string>(TYPES.Token).toConstantValue(process.env.TOKEN);

container.bind<MessageResponder>(TYPES.MessageResponder).to(MessageResponder).inSingletonScope();
container.bind<AffirmationService>(TYPES.AffirmationService).to(AffirmationService).inSingletonScope();
container.bind<KanyeService>(TYPES.KanyeService).to(KanyeService).inSingletonScope();




export default container;
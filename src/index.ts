require('dotenv').config(); // Recommended way of loading dotenv
import { Bot } from "./bot";

let bot = new Bot(process.env.TOKEN!);

bot.listen().then(() => {
    console.log('Logged in!');
}).catch((error) => {
    console.log('Oh no!', error);
});
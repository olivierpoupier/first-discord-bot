import { GuildMember, Message } from "discord.js";


export class MuteCommand {
    private user: GuildMember;
    constructor(user: GuildMember) {
        this.user = user;
    }

    execute() {
        this.user.voice.setMute(true);
    }
}
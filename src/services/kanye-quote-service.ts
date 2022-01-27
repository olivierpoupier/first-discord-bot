const fetch = require('node-fetch');

export class KanyeService {
    private url: string = 'https://api.kanye.rest';

    constructor() {}

    public async getQuote(): Promise<string> {
        const response = await fetch(this.url);
        const data = await response.json() as any;
        return data.quote;
    }
}
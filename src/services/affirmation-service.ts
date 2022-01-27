const fetch = require('node-fetch');

export class AffirmationService {
    private url: string = 'https://www.affirmations.dev/';

    constructor() {}

    public async getAffirmation(): Promise<string> {
        const response = await fetch(this.url);
        const data = await response.json() as any;
        return data.affirmation;
    }
}

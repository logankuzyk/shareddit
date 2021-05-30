import { SnoowrapCredentials } from './types';

const dotenv = require('dotenv').config()

export const login = (): SnoowrapCredentials => {
    if (!process.env.USERAGENT) throw new Error("UserAgent not found - can't login to reddit");
    if (!process.env.CLIENT_ID) throw new Error("Client ID not found - can't login to reddit");
    if (!process.env.CLIENT_SECRET) throw new Error("Client secret not found - can't login to reddit");
    if (!process.env.REDDIT_USERNAME) throw new Error("reddit username not found - can't login to reddit");
    if (!process.env.PASSWORD) throw new Error("reddit password not found - can't login to reddit");

    const credentials: SnoowrapCredentials = {
        userAgent: process.env.USERAGENT,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        username: process.env.REDDIT_USERNAME,
        password: process.env.PASSWORD,
    }

    return credentials;
}
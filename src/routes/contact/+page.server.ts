import type { Load } from '@sveltejs/kit';
import dotenv from 'dotenv'
dotenv.config()

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async () => {




    return {
        apikey: process.env.GOOGLE_MAPS_API
    };
}
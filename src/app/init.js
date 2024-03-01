import axios from "axios"

import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// import translationEN from "./locales/en/translation.json";
// import translationJA from "./locales/ja/translation.json";

export const initializeApp = () => {
    // Setting base URL for all API request via axios
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        // dev code

    } else {
        // Prod build code

        // Removing console.log from prod
        console.log = () => { };

        // init analytics here
    }

    const resources = {
        // en: {
        //     translation: translationEN,
        // },
        // ja: {
        //     translation: translationJA,
        // },
    };

    i18next.use(initReactI18next).init({
        resources,
        lng: localStorage.getItem('lang') || 'en',
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });
}

export const initializeSocket = (accessToken) => {
    window.socket = new WebSocket(`ws://localhost:8000/ws/?token=${accessToken}`);

    window.socket.onopen = () => {
        // Connection is established, send the authentication token
        window.socket.send(JSON.stringify({ type: 'authenticate', token: accessToken }));
    };

    window.socket.onmessage = (event) => {
        // Handle incoming messages from the WebSocket
        console.log(event.data);
    };

    window.socket.onclose = (event) => {
        // Handle WebSocket close event
        console.log('WebSocket connection closed:', event);
    };
}
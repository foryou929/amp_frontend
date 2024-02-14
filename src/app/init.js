import axios from "axios"

import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// import translationEN from "./locales/en/translation.json";
// import translationJA from "./locales/ja/translation.json";

const initializeApp = () => {
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

export default initializeApp
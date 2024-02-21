// auth.js

const ACCESS_TOKEN_STORAGE_KEY = 'access_token';
const REFRESH_TOKEN_STORAGE_KEY = 'refresh_token';

export const saveTokens = ({ access, refresh }) => {
    localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, access);
    localStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, refresh);
};

export const saveAccessToken = (access) => {
    localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, access);
};

export const getAccessToken = () => {
    return localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
};

export const getRefreshToken = () => {
    return localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY);
};

export const removeTokens = () => {
    localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
    localStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY);
};
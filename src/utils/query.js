import axios from 'axios'
import { NotificationManager } from 'react-notifications'
import { getAccessToken, getRefreshToken, saveAccessToken } from "../app/auth"

const request = async (method, url, data, success, error, auth = false, access = false) => {
    const token = getAccessToken();
    const headers = {};
    if (auth && token) {
        headers["Authorization"] = `Bearer ${token}`
    }
    try {
        const result = await axios.request({ method, url, data, headers })
        if (success)
            success(result.data)
        return result.data
    } catch (err) {
        if (access == false && err?.response?.status == 401) {
            try {
                const token = await axios.request({ method: "post", url: `/token/refresh/`, data: { refresh: getRefreshToken() } });
                saveAccessToken(token.data.access);
                await request(method, url, data, success, error, auth, true);
            } catch (err) {
            }
        } else {
            if (error)
                error(err.response?.data)
            else
                NotificationManager.error(err.message)
        }
    }
}

export default {
    post: async (url, data, success, error) => {
        return await request("post", url, data, success, error)
    },

    get: async (url, success, error) => {
        return await request("get", url, {}, success, error)
    },

    put: async (url, data, success, error) => {
        return await request("put", url, data, success, error)
    },

    patch: async (url, data, success, error) => {
        return await request("patch", url, data, success, error)
    },

    delete: async (url, success, error) => {
        return await request("delete", url, {}, success, error)
    },

    auth: {
        post: async (url, data, success, error) => {
            return await request("post", url, data, success, error, true)
        },

        get: async (url, success, error) => {
            return await request("get", url, {}, success, error, true)
        },

        put: async (url, data, success, error) => {
            return await request("put", url, data, success, error, true)
        },

        patch: async (url, data, success, error) => {
            return await request("patch", url, data, success, error, true)
        },

        delete: async (url, success, error) => {
            return await request("delete", url, {}, success, error, true)
        },
    }
}
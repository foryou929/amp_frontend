import axios from 'axios'
import { NotificationManager } from 'react-notifications'
import i18next from 'i18next'
import _ from 'lodash'
import { getAccessToken, getRefreshToken, saveAccessToken } from "../app/auth"

const request = async (method, url, data, success, error, auth = false, access = false) => {
    const token = getAccessToken();
    const headers = {};
    if (auth && token) {
        headers["Authorization"] = `Bearer ${token}`
    }
    try {
        const result = await axios.request({ method, url, data, headers })
        if (result.data?.message)
            NotificationManager.success(i18next.t(result.data?.message))
        if (success)
            success(result.data)
        return result.data
    } catch (err) {
        if (access == false && err?.response?.status == 401) {
            try {
                const { data } = await axios.request({ method: "post", url: "/api/token/refresh/", data: { refresh: getRefreshToken() } });
                saveAccessToken(data.access);
                await request(method, url, data, success, error, auth, true);
            } catch (err) {
                throw err;
            }
        } else {
            if (error)
                error(err.response?.data)
            else
                NotificationManager.error(i18next.t(err.response?.data?.message) || err.message)
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

    delete: async (url, success, error) => {
        return await request("delete", url, {}, success, error)
    },

    upload: async (url, files, success, error) => {
        const formData = new FormData()
        for (let i = 0; i < files.length; i++)
            formData.append(`files`, files[i])
        return await request("post", url, formData, success, error)
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

        delete: async (url, success, error) => {
            return await request("delete", url, {}, success, error, true)
        },

        upload: async (url, files, success, error) => {
            const formData = new FormData()
            for (let i = 0; i < files.length; i++)
                formData.append(`files`, files[i])
            return await request("post", url, formData, success, error, true)
        },
    }
}
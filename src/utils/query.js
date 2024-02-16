import axios from 'axios'
import { NotificationManager } from 'react-notifications'
import i18next from 'i18next'
import _ from 'lodash'
import { getAccessToken } from "../app/auth"

const request = async (method, url, data, success, error) => {
    const token = getAccessToken();
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
    try {
        const result = await axios.request({ method, url, data })
        if (result.data?.message)
            NotificationManager.success(i18next.t(result.data?.message), i18next.t('Success'))
        if (success)
            success(result.data)
        return result.data
    } catch (err) {
        if (typeof err.response?.data == 'object') {
            _.map(err.response?.data, (message, index) => {
                if (typeof message == 'string')
                    NotificationManager.error(message, index.charAt(0).toUpperCase() + index.slice(1))
            })
        } else if (typeof err.response?.data == 'string') {
            
        } else {
            NotificationManager.error(err.message, 'Error');
        }
        if (error)
            error(err.response?.data)
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
    }
}
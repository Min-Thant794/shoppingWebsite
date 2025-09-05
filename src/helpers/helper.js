export const setItemToLocalStorage = (key, payload) => {
    return localStorage.setItem(key, JSON.stringify(payload))
}

export const getItemToLocalStorage = (key) => {
    const data = localStorage.getItem(key)
    return JSON.parse(data)
}
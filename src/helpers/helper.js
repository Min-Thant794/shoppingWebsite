export const setItemToLocalStorage = (key, payload) => {
    return localStorage.setItem(key, JSON.stringify(payload))
}

export const getItemFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
}

export const clearItemFromLocalStorage = () => {
    return localStorage.clear();
}

export const removeItemFromLocalStorage = ( key ) => {
    return localStorage.removeItem(key);
}

export const formatCardNumber = (value) => {
    return value.replace(/\D/g, "") //remove non-digits
    .replace(/(.{4})/g, "$1") // insert space every 4 digits
    .trim(); // remove trailing space
}
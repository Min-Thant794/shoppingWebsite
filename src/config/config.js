export const STORAGE_KEYS = {
    USER_DATA: "user-data",
    TOKEN: "x-access-token",
    CLICKED_TAB: "clickedTab",
    CART: "cart"
}

export const API_ROUTES = {
    // DEPLOY_BASE_URL: "https://"
    LOCAL_BASE_URL: "http://localhost:8080/api/v1",
    LOCAL_SERVER_URL: "http://localhost:8080/",

    //user auth
    USER_LOGIN: "/user/login",
    UPDATE_USER: "/user",

    //category
    GET_ALL_CATEGORY: "/category",

    //product
    GET_ALL_PRODUCT: "/product",
    GET_PRODUCT_BY_CATEGORY: "/product/category/",

    //order
    ORDER: "/order",

    //payment
    GET_ALL_PAYMENT: "/payment"
}
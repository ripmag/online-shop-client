import { $authHost } from "./index";

export const fetchBasket = async (id) => {    
    const { data } = await $authHost.get('api/basket', { params: { basketId: id } })    
    return data
}

export const addToBasket = async (basket) => {
    console.log("deviceId, basketId",basket)
    const { data } = await $authHost.post('api/basket', basket)
    return data
}
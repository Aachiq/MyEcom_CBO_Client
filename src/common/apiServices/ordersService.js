import { API_URL } from "../env"

export const getOrdersService = () => {
    return fetch(`${API_URL}/order/showall`)
    .then((res) =>res.json())
    .then((data) => data.orders)
}

export const deleteOrderService = (idUser,token,idOrder) => {
    return fetch(`${API_URL}/order/delete/${idUser}?id=${idOrder}`,{
        method: "DELETE",
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    })
    .then((data) => data.message)
}
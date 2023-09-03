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

export const searchOrderService = (word) => {
    const bodyObj = {word: word};
    return fetch(`${API_URL}/order/search`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyObj),
    })
    .then((res) => res.json())
    .then((data) => data.foundOrders)
  }
  
  export const paginationOrderService = async (numPage) => {
    return fetch(`${API_URL}/order/paginate?page=${numPage}`)
          .then((res) => res.json())
          .then((data) => data.paginatedOrder)
  }
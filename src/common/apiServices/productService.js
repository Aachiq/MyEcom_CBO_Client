import { API_URL } from "../env"

export const getProductsService = async () => {
    return fetch(`${API_URL}/product/showall`)
    .then((res) => res.json())
    .then((data) => data.products)
}

export const deleteProductService = async (idUser,token,idProduct) => {
    return fetch(`${API_URL}/product/delete/${idUser}?id=${idProduct}`,{
        method: "DELETE",
        headers : {
            "Authorization": `Bearer ${token}`
        }
    })
    .then((res) => res.json())
    .then((data) => data.message)
}
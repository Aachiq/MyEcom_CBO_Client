import { API_URL } from "../env"

export const getProductsService = async () => {
    return fetch(`${API_URL}/product/showall`)
    .then((res) => res.json())
    .then((data) => data.products)
}

export const getOneProductService = async (idProduct) => {
    return fetch(`${API_URL}/product/show?id=${idProduct}`)
    .then((res) => res.json())
    .then((data) => data.product)
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

export const searchProductService = (word) => {
    const bodyObj = {word: word};
    return fetch(`${API_URL}/product/search`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyObj),
    })
    .then((res) => res.json())
    .then((data) => data.foundProducts)
}
  
export const paginationProductService = async (numPage) => {
   return fetch(`${API_URL}/product/paginate?page=${numPage}`)
          .then((res) => res.json())
          .then((data) => data.paginatedProduct)
}
  
export const createProductService = async (idUser,token,productFormDataObj) => {
    return fetch(`${API_URL}/product/create/${idUser}`,{
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: productFormDataObj,
    })
    .then((res) => res.json())
    .then((data) => data.message)
}

export const updateProductService = (idUser,token,productFormDataObj,idProduct) => {
  return fetch(`${API_URL}/product/update/${idUser}?id=${idProduct}`,{
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: productFormDataObj,
  })
  .then((res) => res.json())
  .then((data) => data.message)
}

export const getProductsByCategory = async (id) => {
  return fetch(`${API_URL}/product/show/${id}`)
  .then((res) => res.json())
  .then((data) => data.products)
}

export const getProductsByPrice = async (bodyObj) => {
  return fetch(`${API_URL}/product/show/filter-price`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bodyObj) 
  })
  .then((res) => res.json())
  .then((data) => data.products)
}
import { API_URL } from "../env"

export const getCategoriesService = async () => {
 return fetch(`${API_URL}/category/showall`)
  .then((res) => res.json())
  .then((data) => data.categories)
}

export const getOneCategoryService = async (id) => {
 return fetch(`${API_URL}/category/show?id=${id}`)
  .then((res) => res.json())
  .then((data) => data.category)
}

export const deleteCategoriesService = async (userId,token,categoryId) => {
 return fetch(`${API_URL}/category/delete/${userId}?id=${categoryId}`,{
    method: "DELETE",
    headers: {
        "Authorization" : `Bearer ${token}`
    }
 })
  .then((res) => res.json())
  .then((data) => data.message)
}

export const searchCategoryService = (word) => {
  const bodyObj = {word: word};
  return fetch(`${API_URL}/category/search`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyObj),
  })
  .then((res) => res.json())
  .then((data) => data.foundCategories)
}

export const paginationCategoryService = async (numPage) => {
 return fetch(`${API_URL}/category/paginate?page=${numPage}`)
        .then((res) => res.json())
        .then((data) => data.paginatedCategory)
}

export const createCategoryService = (idUser,token,categoryObj) => {
  return fetch(`${API_URL}/category/create/${idUser}`,{
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(categoryObj),
  })
  .then((res) => res.json())
  .then((data) => data.message)
}

export const updateCategoryService = (idUser,token,categoryObj,idCatgeory) => {
  return fetch(`${API_URL}/category/update/${idUser}?id=${idCatgeory}`,{
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(categoryObj),
  })
  .then((res) => res.json())
  .then((data) => data.message)
}
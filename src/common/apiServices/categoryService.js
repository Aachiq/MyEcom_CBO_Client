import { API_URL } from "../env"

export const getCategoriesService = async () => {
 return fetch(`${API_URL}/category/showall`)
  .then((res) => res.json())
  .then((data) => data.categories)
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
  return fetch(`${API_URL}/category/search/`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyObj),
  })
  .then((res) => res.json())
  .then((data) => data.foundCategories)
}
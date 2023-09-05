import { API_URL } from "../env"
import { saveAs } from 'file-saver';


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

export const searchOrderService = async (word) => {
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

  export const exportExcelService = () => {
    fetch(`${API_URL}/order/generate-dowload-excel`,{
      method: 'GET',
      headers: {
        Accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      }
    })
    .then((res) => res.blob())
    .then((blob) => {
      // const url = window.URL.createObjectURL(blob);
      // const a = document.createElement('a');
      // a.href = url;
      // a.download = 'orders.xlsx';
      // a.click();

      // or use file-saver or dowload library
      saveAs(blob, 'orders.xlsx');

    })
    .catch((error) => {
      console.error('Error generating Excel:', error);
    });
  }

export const getOrdersByPaymentTypeService = (payType) => {
  return fetch(`${API_URL}/order/filter?payType=${payType}`)
  .then((res) =>res.json())
  .then((data) => data.ordersPaymenType)
}
export const getOrdersByDateService = (dateObj) => {
  return fetch(`${API_URL}/order/filter-date`,{
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(dateObj)
  })
  .then((res) =>res.json())
  .then((data) => data.ordersByDate)
}
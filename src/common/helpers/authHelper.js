// Login setLocalStorage
export const setLocalStorage = (data) => {
    localStorage.setItem('userBoInfos',JSON.stringify(data))
}
// isAuth checkLocalStorage
export const isAuthenticated = () => {
   const authData = localStorage.getItem('userBoInfos');
   if(authData){
    return JSON.parse(authData);
   }
   return false;
}
// Logout clearLocalStorage
export const logout = () => {
    localStorage.removeItem('userBoInfos');
}

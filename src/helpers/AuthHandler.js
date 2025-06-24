export const isLogged = ()=> {
  return !!sessionStorage.getItem("token");

}

export const doLogout = ()=> {
    sessionStorage.removeItem("token")
    
}
export const isLogged = ()=> {
  return !!sessionStorage.getItem("token");

}

export const doLogout = ()=> {
    sessionStorage.removeItem("token")
    
}

export function decodeJWT(token) {
    if (!token) return null;
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (e) {
        return null;
    }
}

  export const getUserRole = () => {
      const token = sessionStorage.getItem("token");
      if (!token) return null;
      const payload = decodeJWT(token);
      return payload.role;
  };

const URL = "http://localhost:8080"

const ongApi = {
  getOngList: async (q) => {
    // const sessionToken = window.sessionStorage.getItem("token")

    let response = ""
    q ? response = await fetch(`${URL}/public/institutions/?page=1&size=9&search=${q}`, {
      method: "GET"
    }) : response = await fetch(`${URL}/public/institutions/?page=1&size=11`, {
      method: "GET"
    })
    return response.json()
  }
}

export default ongApi
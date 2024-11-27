import { useEffect, useState } from "react"
import Header from "../components/header";
import ongApi from "../services/ong";

function Home(){
  const [ongList, setOngList] = useState([])

  useEffect(()=> {
    const getOngList = async ()=> {
      let response = await ongApi.getOngList('A')
      setOngList(response)
    }
    getOngList()
  },[])
    
  console.log(ongList)
    return (
      
      <div className="min-h-screen bg-gray-100">
        <Header />
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Ongs
        </h1>
        <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4">
          {ongList && ongList.map((ong) => (
            <div
              key={ong.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={ong.image}
                alt={ong.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{ong.name}</h2>
                <p className="text-gray-600 mt-2">{ong.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Home
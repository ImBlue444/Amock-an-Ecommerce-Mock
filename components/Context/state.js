import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("https://fakestoreapi.com/products");
      console.log(request.data);
      setData(request.data);
      return request;
    }
    fetchData();
  }, ["https://fakestoreapi.com/products"]);
  let sharedState = {
    data,
    setData,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}

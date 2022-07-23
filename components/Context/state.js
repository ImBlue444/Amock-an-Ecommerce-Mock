import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { contextType } from "better-react-carousel";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);
  const [modalSwitch, setModalSwitch] = useState(false);
  const [modalLogSwitch, setModalLogSwitch] = useState(false);
  const [userLogged, setUserLogged] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("https://fakestoreapi.com/products");
      setData(request.data);
      return request;
    }
    fetchData();
  }, ["https://fakestoreapi.com/products"]);

  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const eventHandler = (event) => {
    setInputValue(event.target.value);
    function searchEngine() {
      if (inputValue.length - 1 < 1) {
        setFilteredData(data);
      } else
        setFilteredData(
          data.filter((val) =>
            val.title.toLowerCase().includes(inputValue.toLowerCase())
          )
        );
      return;
    }
    searchEngine();
  };

  let sharedState = {
    data,
    setData,
    eventHandler,
    filteredData,
    setFilteredData,
    inputValue,
    setInputValue,
    cart,
    setCart,
    modalSwitch,
    setModalSwitch,
    modalLogSwitch,
    setModalLogSwitch,
    userLogged,
    setUserLogged,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}

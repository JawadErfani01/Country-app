import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [Search, setSearch] = useState("");
  const [Country, setCountry] = useState([]);
  const [userMessage, setuserMessage] = useState([]);
  const [Light, setLight] = useState(true)

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://restcountries.com/v2/all`)
      .then((response) => {
        setLoading(false);
        setCountry(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Search by name
  const searchCoutry = (val) => {
    setSearch(val);
  };
  useEffect(() => {
    if (Search === "") {
      setLoading(true);
      axios.get(`https://restcountries.com/v2/all`).then((response) => {
        setLoading(false);
        setCountry(response.data);
      });
    } else {
      setLoading(true);
      axios
        .get(`https://restcountries.com/v2/name/${Search}`)
        .then((response) => {
          setLoading(false);
          setCountry(response.data);
        });
    }
  }, [Search]);
  //Search by Region

  const FilterByRegion = (region) => {
    if (region === "") {
      setLoading(true);
      axios.get(`https://restcountries.com/v2/all`).then((response) => {
        setLoading(false);
        setCountry(response.data);
      });
    } else {
      setLoading(true);
      axios
        .get(`https://restcountries.com/v2/region/${region}`)
        .then((response) => {
          setLoading(false);
          setCountry(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <AppContext.Provider
      value={{
        loading,
        Search,
        Country,
        setSearch,
        setuserMessage,
        userMessage,
        FilterByRegion,
        searchCoutry,
        Light,
        setLight
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };

import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:9000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);
  const [currentCity, SetCurrentCity] = useState({});

  useEffect(function () {
    async function getchCities() {
      try {
        SetIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        alert(err);
      } finally {
        SetIsLoading(false);
      }
    }
    getchCities();
  }, []);

  async function getCity(id) {
    try {
      SetIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      SetCurrentCity(data);
    } catch (err) {
      alert(err);
    } finally {
      SetIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error(`out of CitiesContext`);
  return context;
}
export { CitiesProvider, useCities };

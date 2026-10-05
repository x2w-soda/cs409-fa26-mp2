import { useState, useEffect, useContext, createContext } from 'react'
import axios from "axios";

const DataContext = createContext(null);
const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
});

export default function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
          /*
        const response = await api.get("/", {
          params: {
            limit: 10,
            fields: [
              "id",
              "name",
              "sprites",
            ].join(","),
          },
        });
        */

        const requests = Array.from({ length: 50 }, (_, index) =>
          api.get(`/${index + 1}`, {
              params: {
                limit: 50,
                fields: [
                  "id",
                  "name",
                  "sprites",
                ].join(","),
              },
          })
        );

        const responses = await Promise.all(requests);
        const data = responses.map((response) => response.data)

        console.log("JSON", data)
        setData(data);
        return data;
      } catch (err) {
        setError("Failed to load Pokemon data.");
        console.error(err);
      } finally {
        setLoading(false);
        console.log("Fetch complete");
      }
    };

    fetchData();
  }, []);

  // if (loading) { return <p>Loading data...</p>; }
  // if (error) { return <p role="alert">{error}</p>; }
  // if (!data) { return <p>No data available.</p>; }

  if (loading) {
      console.log("still loading");
      return null;
  }
  if (error) {
      console.log(error);
      return null;
  }
  if (data) {
      console.log("data ok", data);
  }

  return (
      <DataContext.Provider value={data}>
      {children}
      </DataContext.Provider>
  );
}

export function useData() {
    return useContext(DataContext);
}

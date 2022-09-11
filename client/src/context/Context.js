import React, { createContext, useState } from "react";
const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [nationalRecipes, setNationalRecipes] = useState([]);
  const fetchNationFood = async (location) => {
    await fetch(
      `https://tasty.p.rapidapi.com/recipes/list?from=0&size=40&tags=${location}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "ac013d0032msh852eee3edfbb036p1e6bf8jsnc519f3bc3e40",
          "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setNationalRecipes(data.results);
      })
      .catch((err) => console.error(err));
  };

  return (
    <ApiContext.Provider value={{ nationalRecipes, fetchNationFood }}>
      {children}
    </ApiContext.Provider>
  );
};

export {ApiProvider}
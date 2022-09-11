import React, { useState, useEffect } from "react";
import results from "./testdata";
import FoodCard from "../../components/FoodCard";

const Nation = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    let location = window.location.pathname;
    location = location.split("/").slice(-1)[0];
    setLocation(location);
    // Remove when done testing
    //setRecipes(results);
    //setLoading(false);
    // Remove when done testing

    const fetchNationFood = async () => {
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
          console.log(data.results);
          setRecipes(data.results);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    };

    fetchNationFood();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Nationality: {location}</h1>
          <div className="flex justify-evenly flex-wrap p-4">
            {recipes.map((recipe) => (
              <FoodCard key={recipe.id} recipe={recipe}/>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Nation;

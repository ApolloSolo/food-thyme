import React, { useState, useEffect } from "react";
import results from "./testdata";
import { date, time } from "../../utils/time-date";

const Nation = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    let location = window.location.pathname;
    location = location.split("/").slice(-1)[0];
    setLocation(location);
    // Remove when done testing
    setRecipes(results);
    setLoading(false);
    // Remove when done testing

    /* const fetchNationFood = async () => {
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

    fetchNationFood(); */
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
              <div key={recipe.id} className="flex justify-center mb-4">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                  <img
                    className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src={recipe.thumbnail_url}
                    alt=""
                  />
                  <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">
                      {recipe.name}
                    </h5>
                    <ul className="text-gray-700 text-base mb-4">
                      <li><span className="font-bold">Servings:</span> {recipe.yields ? recipe.yields : "N/A"}</li>
                      <li><span className="font-bold">Cook Thyme:</span> {recipe.cook_time_minutes ? recipe.cook_time_minutes : "N/A"}</li>
                      <li><span className="font-bold">Video:</span> <a target="_blank" href={recipe.video_url} className="text-blue-600">avalible</a></li>
                    </ul>
                    <p className="text-gray-600 text-xs mb-4">
                    <span className="font-bold">Last updated:</span> {date(recipe.updated_at*1000)}
                    </p>
                    <div className="flex flex-wrap items-center">
                    <p className="text-gray-600 text-xs font-bold">
                      Tags:
                    </p>
                    {
                        recipe.tags.map((tag) => (
                            <p className="text-gray-600 text-xs rounded-md px-2 m-1 text-center bg-[#e9e9e9]">{tag.display_name}</p>
                        ))
                    }
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Nation;

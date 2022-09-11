import React from "react";
import {Link} from "react-router-dom"
import { date } from "../utils/time-date";
import Tags from "./Tags";

const FoodCard = ({ recipe }) => {
  return (
    <div className="flex justify-center mb-4 md:w-[50%]">
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <img
          className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={recipe.thumbnail_url}
          alt=""
        />
        <div className="p-6 flex flex-col">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {recipe.name}
          </h5>
          <ul className="text-gray-700 text-base mb-4">
            <li>
              <span className="font-bold">Servings:</span>{" "}
              {recipe.yields ? recipe.yields : "N/A"}
            </li>
            <li>
              <span className="font-bold">Cook Thyme:</span>{" "}
              {recipe.cook_time_minutes ? recipe.cook_time_minutes : "N/A"}
            </li>
            <li>
              <span className="font-bold">Video:</span>{" "}
              <a
                target="_blank"
                href={recipe.video_url}
                className="text-blue-600"
              >
                avalible
              </a>
            </li>
          </ul>
          <p className="text-gray-600 text-xs mb-4">
            <span className="font-bold">Last updated:</span>{" "}
            {date(recipe.updated_at * 1000)}
          </p>
          <div className="flex flex-wrap items-center">
            <p className="text-gray-600 text-xs font-bold">Tags:</p>
            {recipe.tags.map((tag) => (
              <Tags key={tag.display_name} tag={tag} />
            ))}
          </div>
          <div>
            <Link to={`/recipe/${recipe.id}`}>
                Check It Out
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FoodCard;

import React, { useEffect, useState } from 'react';

const Recipe = ({ area }) => {
  const [meals, setMeals] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Fetch meals by area
  useEffect(() => {
    if (area) {
      const fetchDataFromApi = async () => {
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
          const data = await response.json();
          setMeals(data.meals || []);
        } catch (error) {
          console.error("Error fetching data:", error);
          setMeals([]);
        }
      };

      fetchDataFromApi();
    }
  }, [area]);

  // Fetch meals by search
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error("Error fetching search data:", error);
      setMeals([]);
    }
  };

  return (
    <>
      <form onSubmit={handleSearchSubmit} className="flex items-center justify-center my-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search for a recipe..."
          className="border border-gray-400 p-2 rounded-md text-black w-80"
        />
        <button type="submit" className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
          Search
        </button>
      </form>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6 max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
        {meals.length === 0 ? (
          <p className="text-center text-gray-500 w-full">No meals found for {area}.</p>
        ) : (
          meals.map((meal, i) => (
            <div
              key={i}
              className="flex flex-col items-center w-48 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <img
                className="w-40 h-40 rounded-full object-cover mt-4"
                src={meal.strMealThumb}
                alt={meal.strMeal}
                loading="lazy"
              />
              <h2 className="text-center font-semibold text-lg mt-3 mb-4 px-2">{meal.strMeal}</h2>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Recipe;

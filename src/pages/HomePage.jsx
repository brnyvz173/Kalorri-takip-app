import { useState, useEffect } from "react";
import MealForm from "../components/TodoForm";
import MealList from "../components/TodoList";
import { createMeal } from "../interfaces/todo";

function HomePage() {
  const [meals, setMeals] = useState(() => {
    const saved = localStorage.getItem("meals");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(meals));
  }, [meals]);

  const handleAdd = (name, calories, mealType) => {
    setMeals([...meals, createMeal(name, calories, mealType)]);
  };

  const handleDelete = (id) => {
    setMeals(meals.filter((meal) => meal.id !== id));
  };

  const handleUpdate = (id, newName, newCalories, newMealType) => {
    setMeals(
      meals.map((meal) =>
        meal.id === id
          ? {
              ...meal,
              name: newName,
              calories: Number(newCalories),
              mealType: newMealType,
            }
          : meal
      )
    );
  };

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);

  return (
    <div className="home-page">
      <h1>🍽️ Günlük Kalori Takibi</h1>
      <div className="total-calories">
        Toplam: <strong>{totalCalories}</strong> kcal
      </div>
      <MealForm onAdd={handleAdd} />
      <MealList meals={meals} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
}

export default HomePage;
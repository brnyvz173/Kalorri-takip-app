import { useState } from "react";
import { MEAL_TYPES } from "../interfaces/todo";

function MealForm({ onAdd }) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [mealType, setMealType] = useState(MEAL_TYPES[0]);

  const handleSubmit = () => {
    if (name.trim() === "" || calories === "") return;
    onAdd(name, calories, mealType);
    setName("");
    setCalories("");
  };

  return (
    <div className="meal-form">
      <input
        type="text"
        placeholder="Yemek adı..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Kalori"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
        {MEAL_TYPES.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>Ekle</button>
    </div>
  );
}

export default MealForm;
import { useState } from "react";
import { MEAL_TYPES } from "../interfaces/todo";

function MealItem({ meal, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(meal.name);
  const [editCalories, setEditCalories] = useState(meal.calories);
  const [editMealType, setEditMealType] = useState(meal.mealType);

  const handleUpdate = () => {
    if (editName.trim() === "" || editCalories === "") return;
    onUpdate(meal.id, editName, editCalories, editMealType);
    setIsEditing(false);
  };

  return (
    <div className="meal-item">
      {isEditing ? (
        <>
          <input
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <input
            type="number"
            value={editCalories}
            onChange={(e) => setEditCalories(e.target.value)}
          />
          <select
            value={editMealType}
            onChange={(e) => setEditMealType(e.target.value)}
          >
            {MEAL_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <button onClick={handleUpdate}>Kaydet</button>
          <button onClick={() => setIsEditing(false)}>İptal</button>
        </>
      ) : (
        <>
          <span className="meal-info">
            <strong>{meal.name}</strong> — {meal.calories} kcal
            <span className="meal-type"> ({meal.mealType})</span>
          </span>
          <button onClick={() => setIsEditing(true)}>Düzenle</button>
          <button onClick={() => onDelete(meal.id)}>Sil</button>
        </>
      )}
    </div>
  );
}

export default MealItem;
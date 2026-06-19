import MealItem from "./TodoItem";

function MealList({ meals, onDelete, onUpdate }) {
  if (meals.length === 0) {
    return <p className="empty">Henüz yemek eklenmedi. Bir şeyler ekle!</p>;
  }

  return (
    <div className="meal-list">
      {meals.map((meal) => (
        <MealItem
          key={meal.id}
          meal={meal}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default MealList;
export const createMeal = (name, calories, mealType) => ({
  id: Date.now(),
  name: name,
  calories: Number(calories),
  mealType: mealType,
});

export const MEAL_TYPES = ["Kahvaltı", "Öğle", "Akşam", "Ara öğün"];
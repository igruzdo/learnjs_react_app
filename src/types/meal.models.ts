export interface MealInterface {
  id: string,
  name: string,
  price: number,
  ingredients: string[],
}


export interface MealProps {
  meal: MealInterface;
}

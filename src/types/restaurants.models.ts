export interface RestaurantInterface {
  id: string,
  name: string,
  menu: MenuInterface[],
  reviews: ReviewsInterface[],
}

interface MenuInterface {
  id: string,
  name: string,
  price: number,
  ingredients: string[],
}

interface ReviewsInterface {
  id: string,
  user: string,
  text: string,
  rating: number,
}
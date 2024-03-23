export interface ReviewInterface {
  id: string,
  user: string,
  text: string,
  rating: number,
}

export interface ReviewProps {
  review: ReviewInterface;
}
import { FC } from 'react';
import { ReviewInterface } from '../../types/review.models';

export interface ReviewProps {
  review: ReviewInterface;
}

export const Review: FC<ReviewProps> = ({ review }) => <li>{review.text}</li>;

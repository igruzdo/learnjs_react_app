import { FC } from 'react';
import { useSelector } from 'react-redux';
import { ReviewMap, AppStore } from '../../types/store';

interface ReviewProps {
  reviewId: string;
}

export const Review: FC<ReviewProps> = ({ reviewId }) => {
  const review = useSelector<AppStore, ReviewMap[string]>((state) => {
    return state.review.entities[reviewId];
  });
  if (!review) return;

  return <li>{review.text}</li>;
};

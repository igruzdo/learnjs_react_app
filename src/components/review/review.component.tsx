import { FC } from 'react';
import { useSelector } from 'react-redux';
import { ReviewMap, StoreSlices } from '../../types/store';

interface ReviewProps {
  reviewId: string;
}

export const Review: FC<ReviewProps> = ({ reviewId }) => {
  const review = useSelector<StoreSlices, ReviewMap[string]>(
    (state) => state.review.entities[reviewId],
  );
  return <li>{review.text}</li>;
};

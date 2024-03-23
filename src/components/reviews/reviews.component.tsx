import { FC } from 'react';
import { ReviewsProps } from '../../types/reviews.models';
import { Review } from '../review/review.component';
import { Empty } from '../empty/empty.component';

export const Reviews: FC<ReviewsProps> = ({ reviews }) => (
  <div>
    <h3>Отзывы</h3>
    {reviews?.length ? (
      <ul>
        {reviews.map((item) => (
          <Review review={item} />
        ))}
      </ul>
    ) : (
      <Empty message="отзывов" />
    )}
  </div>
);

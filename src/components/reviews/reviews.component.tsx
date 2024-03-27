import { FC } from 'react';
import { Review } from '../review/review.component';
import { EmptyList } from '../empty-list/empty-list.component';
import { ReviewInterface } from '../../types/review.models';

interface ReviewsProps {
  reviews: ReviewInterface[];
}

export const Reviews: FC<ReviewsProps> = ({ reviews }) => (
  <div>
    <h3>Отзывы</h3>
    {reviews?.length ? (
      <ul>
        {reviews.map((item, index) => (
          <Review key={index} review={item} />
        ))}
      </ul>
    ) : (
      <EmptyList entity="отзывов" />
    )}
  </div>
);

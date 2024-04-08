import { FC } from 'react';
import { Review } from '../review/review.component';
import { EmptyList } from '../empty-list/empty-list.component';
import { ReviewInterface } from '../../types/review.models';
import styles from './reviews.module.scss';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { RestaurantMap, StoreSlices } from '../../types/store';

interface ReviewsProps {
  restaurantId: string;
}

export const Reviews: FC<ReviewsProps> = ({ restaurantId }) => {
  const restaurant = useSelector<StoreSlices, RestaurantMap[string]>(
    (state) => state.restaurant.entities[restaurantId],
  );
  const reviewsIds = restaurant.reviews;

  return (
    <div className={classNames(styles.root)}>
      <h3>Отзывы</h3>
      {reviewsIds?.length ? (
        <ul className={classNames(styles.reviewList)}>
          {reviewsIds.map((id) => (
            <Review key={id} reviewId={id} />
          ))}
        </ul>
      ) : (
        <EmptyList entity="отзывов" />
      )}
    </div>
  );
};

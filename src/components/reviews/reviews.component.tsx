import { FC, useEffect } from 'react';
import { Review } from '../review/review.component';
import { EmptyList } from '../empty-list/empty-list.component';
import styles from './reviews.module.scss';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { AppStore } from '../../types/store';
import { useDispatch } from 'react-redux';
import { getReviewsByRestaurantId } from '../../redux/enities/review/thunks/get-review-by-id.thunk';
import { Dispatch } from '@reduxjs/toolkit';
import { selectReviewIdsByRestaurantId } from '../../redux/enities/restaurant/selector';

interface ReviewsProps {
  restaurantId: string;
}

export const Reviews: FC<ReviewsProps> = ({ restaurantId }) => {
  const reviewsIds = useSelector<AppStore, string[]>((state: AppStore) =>
    selectReviewIdsByRestaurantId(state, restaurantId),
  );

  const dispatch = useDispatch<Dispatch<any>>();

  useEffect(() => {
    dispatch(getReviewsByRestaurantId(restaurantId));
  }, [restaurantId]);

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

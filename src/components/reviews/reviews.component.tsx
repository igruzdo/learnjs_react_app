import { FC } from 'react';
import { Review } from '../review/review.component';
import { EmptyList } from '../empty-list/empty-list.component';
import { ReviewInterface } from '../../types/review.models';
import styles from './reviews.module.scss';
import classNames from 'classnames';

interface ReviewsProps {
  reviews: ReviewInterface[];
}

export const Reviews: FC<ReviewsProps> = ({ reviews }) => (
  <div className={classNames(styles.root)}>
    <h3>Отзывы</h3>
    {reviews?.length ? (
      <ul className={classNames(styles.reviewList)}>
        {reviews.map((item, index) => (
          <Review key={index} review={item} />
        ))}
      </ul>
    ) : (
      <EmptyList entity="отзывов" />
    )}
  </div>
);

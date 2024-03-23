import { FC } from 'react';
import { ReviewProps } from '../../types/review.models';

export const Review: FC<ReviewProps> = ({ review }) => <li>{review.text}</li>;

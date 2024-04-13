import {memo} from 'react';
import {STAR_WIDTH} from '../../../const';
import {Comment} from '../../../types';

type ReviewProps = {
  review: Comment;
}

const Review = memo(({review}: ReviewProps): JSX.Element => {
  const {date, user, comment, rating} = review;
  const commentData: Date = new Date(date);

  return (
    <li className="reviews__item" data-testid="review-container">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${STAR_WIDTH * Math.round(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date.split('T')[0]}>
          {`${commentData.toLocaleString('en', { month: 'long' })} ${commentData.getFullYear()}`}
        </time>
      </div>
    </li>
  );
});

Review.displayName = 'Review';

export default Review;

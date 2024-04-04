import {memo} from 'react';
import Review from '../review/review';
import {Comment} from '../../../types';
import {MAX_REVIEWS} from '../../../const';

type ReviewsListProps = {
  comments: Comment[];
}

const ReviewsList = memo(({comments}: ReviewsListProps): JSX.Element => {
  const sortedComments = comments.slice().sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {sortedComments.slice(0, MAX_REVIEWS).map((comment) => (
          <Review
            key={comment.id}
            review={comment}
          />
        ))}
      </ul>
    </>
  );
});

ReviewsList.displayName = 'ReviewsList';

export default ReviewsList;

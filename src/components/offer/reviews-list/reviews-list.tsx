import {memo} from 'react';
import Review from '../review/review';
import {Comment} from '../../../types';
import {MAX_REVIEWS, RequestStatus} from '../../../const';
import { useAppSelector } from '../../../hooks/use-app-selector';
import { commentsSelectors } from '../../../store/comments-slice/comments-slice';
import ErrorMessage from '../../error-message/error-message';
import EmptyComponent from '../../empty-component/empty-component';

type ReviewsListProps = {
  comments: Comment[];
}

const ReviewsList = memo(({comments}: ReviewsListProps): JSX.Element => {
  const sortedComments = comments.slice().sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  const requestStatus = useAppSelector(commentsSelectors.status);

  return (
    <>
      <h2 className="reviews__title" data-testid="reviews-title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      {requestStatus === RequestStatus.Failed && <ErrorMessage type='reviews' />}
      {requestStatus === RequestStatus.Success && comments.length === 0 && <EmptyComponent type='reviews' />}
      {requestStatus === RequestStatus.Success && comments.length > 0 &&
        <ul className="reviews__list">
          {sortedComments.slice(0, MAX_REVIEWS).map((comment) => (
            <Review
              key={comment.id}
              review={comment}
            />
          ))}
        </ul>}
    </>
  );
});

ReviewsList.displayName = 'ReviewsList';

export default ReviewsList;

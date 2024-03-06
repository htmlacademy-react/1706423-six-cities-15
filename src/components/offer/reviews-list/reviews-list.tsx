import Review from '../review/review';
import {Comment} from '../../../types';

type ReviewsListProps = {
  comments: Comment[];
}

const ReviewsList = ({comments}: ReviewsListProps): JSX.Element => (
  <>
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
    <ul className="reviews__list">
      {comments.map((comment) => (
        <Review
          key={comment.id}
          comment={comment}
        />
      ))}
    </ul>
  </>
);

export default ReviewsList;

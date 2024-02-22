import Review from '../review/review';

type ReviewsListProps = {
  comments: {
    id: string;
    date: string;
    user: {
      name: string;
      avatarUrl: string;
      isPro: boolean;
    };
    text: string;
    rating: number;
  }[];
}

const ReviewsList = ({comments}: ReviewsListProps): JSX.Element => (
  <ul className="reviews__list">
    {comments.map((comment) => (
      <Review
        key={comment.id}
        comment={comment}
      />
    ))}
  </ul>
);

export default ReviewsList;

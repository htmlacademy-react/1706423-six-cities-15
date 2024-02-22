import {STAR_WIDTH} from '../../const';

type ReviewProps = {
  comment: {
    id: string;
    date: string;
    user: {
      name: string;
      avatarUrl: string;
      isPro: boolean;
    };
    text: string;
    rating: number;
  };
}

const Review = ({comment}: ReviewProps): JSX.Element => {
  const {date, user, text, rating} = comment;
  const commentData: Date = new Date(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${STAR_WIDTH * rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={date.split('T')[0]}>
          {`${commentData.toLocaleString('en', { month: 'long' })} ${commentData.getFullYear()}`}
        </time>
      </div>
    </li>
  );
};

export default Review;

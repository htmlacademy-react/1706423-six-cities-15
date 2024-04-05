import {FormEvent, useCallback, useState} from 'react';
import {MAX_COMMENT_SYMBOLS, MIN_COMMENT_SYMBOLS, RATING} from '../../../const';
import {ChangeEventHandler} from '../../../types';
import RatingFormField from '../rating-form-field/rating-form-field';
import {postComment} from '../../../store/api-actions';
import {useAppDispatch} from '../../../hooks/use-app-dispatch';
import ReviewTextarea from '../review-textarea/review-textarea';

type ReviewFormProps = {
  id: string;
}

const ReviewForm = ({id}: ReviewFormProps): JSX.Element => {
  const [ratingValue, setRatingValue] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleChangeRating: ChangeEventHandler = useCallback(
    (evt) => setRatingValue(evt.target.value),
    []
  );

  const handleChangeComment: ChangeEventHandler = useCallback(
    (evt) => setComment(evt.target.value),
    []
  );

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (ratingValue !== '' && comment !== '') {
      dispatch(postComment({
        id,
        review: {
          comment: comment,
          rating: Number(ratingValue),
        },
      }));
      setRatingValue('');
      setComment('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="reviews__form form"
      action="#" method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RATING)
          .reverse()
          .map(([rating, title]: [string, string]) => (
            <RatingFormField
              key={rating}
              rating={rating}
              title={title}
              onChange={handleChangeRating}
              ratingValue={ratingValue}
            />
          ))}
      </div>
      <ReviewTextarea
        comment={comment}
        onChange={handleChangeComment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_COMMENT_SYMBOLS} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={
            ratingValue === ''
            || comment.length < MIN_COMMENT_SYMBOLS
            || comment.length > MAX_COMMENT_SYMBOLS
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;

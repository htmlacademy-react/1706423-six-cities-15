import {FormEvent, useCallback, useState} from 'react';
import {MAX_COMMENT_SYMBOLS, MIN_COMMENT_SYMBOLS, RATING, RequestStatus} from '../../../const';
import {ChangeEventHandler} from '../../../types';
import RatingFormField from '../rating-form-field/rating-form-field';
import {postComment} from '../../../store/api-actions';
import {useAppDispatch} from '../../../hooks/use-app-dispatch';
import ReviewTextarea from '../review-textarea/review-textarea';
import {useAppSelector} from '../../../hooks/use-app-selector';
import {commentsSelectors} from '../../../store/comments-slice/comments-slice';
import ErrorMessage from '../../error-message/error-message';

type ReviewFormProps = {
  id: string;
}

const ReviewForm = ({id}: ReviewFormProps): JSX.Element => {
  const postCommentStatus = useAppSelector(commentsSelectors.postCommentStatus);
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

  const handleSubmitFormReview = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (ratingValue !== '' && comment !== '') {
      dispatch(postComment({
        id,
        review: {
          comment: comment,
          rating: Number(ratingValue),
        },
      }))
        .then((response) => {
          if (response.meta.requestStatus === 'fulfilled') {
            setRatingValue('');
            setComment('');
          }
        });
    }
  };

  return (
    <form
      onSubmit={handleSubmitFormReview}
      className="reviews__form form"
      action="#" method="post"
      data-testid="reviews-form"
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
              disabled={postCommentStatus === RequestStatus.Loading}
            />
          ))}
      </div>
      <ReviewTextarea
        comment={comment}
        onChange={handleChangeComment}
        disabled={postCommentStatus === RequestStatus.Loading}
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
            || postCommentStatus === RequestStatus.Loading
          }
        >
          Submit
        </button>
      </div>
      {postCommentStatus === RequestStatus.Failed && <ErrorMessage type='review' />}
    </form>
  );
};

export default ReviewForm;

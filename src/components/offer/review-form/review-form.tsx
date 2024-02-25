import {RATING} from '../../../const';
import RatingFormField from '../rating-form-field/rating-form-field';

const ReviewForm = (): JSX.Element => (
  <form className="reviews__form form" action="#" method="post">
    <label className="reviews__label form__label" htmlFor="review">Your review</label>
    <div className="reviews__rating-form form__rating">
      {Object.entries(RATING).map(([key, value]: [string, string]) => (
        <RatingFormField key={key} rating={key} value={value} />
      ))}
    </div>
    <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
    <div className="reviews__button-wrapper">
      <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
      </p>
      <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
    </div>
  </form>
);

export default ReviewForm;

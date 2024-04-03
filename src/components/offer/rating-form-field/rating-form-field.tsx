import {ChangeEventHandler} from 'react';

type RatingFormFieldProps = {
  rating: string;
  title: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  ratingValue: string;
}

const RatingFormField = ({rating, title, onChange, ratingValue}: RatingFormFieldProps): JSX.Element => (
  <>
    <input
      className="form__rating-input visually-hidden"
      name="rating"
      value={`${rating}`}
      id={`${rating}-stars`}
      type="radio"
      onChange={onChange}
      checked={ratingValue === rating}
    />
    <label
      htmlFor={`${rating}-stars`}
      className="reviews__rating-label form__rating-label"
      title={title}
    >
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"></use>
      </svg>
    </label>
  </>
);

export default RatingFormField;

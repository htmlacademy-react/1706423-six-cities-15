import {ChangeEventHandler, memo} from 'react';

type RatingFormFieldProps = {
  rating: string;
  title: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  ratingValue: string;
  disabled: boolean;
}

const RatingFormField = memo(({rating, title, onChange, ratingValue, disabled}: RatingFormFieldProps): JSX.Element => (
  <>
    <input
      className="form__rating-input visually-hidden"
      name="rating"
      value={`${rating}`}
      id={`${rating}-stars`}
      type="radio"
      onChange={onChange}
      checked={ratingValue === rating}
      disabled={disabled}
      data-testid="rating-input"
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
));

RatingFormField.displayName = 'RatingFormField';

export default RatingFormField;

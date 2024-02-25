type RatingFormFieldProps = {
  rating: string;
  value: string;
}

const RatingFormField = ({rating, value}: RatingFormFieldProps): JSX.Element => (
  <>
    <input className="form__rating-input visually-hidden" name="rating" value={`${rating}`} id={`${rating}-stars`} type="radio" />
    <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title={value}>
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"></use>
      </svg>
    </label>
  </>
);

export default RatingFormField;

import {ChangeEventHandler, memo} from 'react';

type ReviewTextareaProps = {
  comment: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

const ReviewTextarea = memo(({comment, onChange}: ReviewTextareaProps): JSX.Element => (
  <textarea
    className="reviews__textarea form__textarea"
    id="review"
    name="review"
    placeholder="Tell how was your stay, what you like and what can be improved"
    value={comment}
    onChange={onChange}
  >
  </textarea>
));

ReviewTextarea.displayName = 'ReviewTextarea';

export default ReviewTextarea;

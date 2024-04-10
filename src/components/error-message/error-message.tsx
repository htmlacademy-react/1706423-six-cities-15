import cls from './error-message.module.css';

const variantsError = {
  login: {text: 'Authorization request error. Try again.', className: ''},
  review: {text: 'Error sending review. Try again.', className: ''},
  reviews: {text: 'Failed to load reviews.', className: cls.load},
  offers: {text: 'Failed to load places in the neighbourhood.', className: cls.load},
};

type ErrorMessageProps = {
  type: keyof typeof variantsError;
}

const ErrorMessage = ({type}: ErrorMessageProps): JSX.Element => (
  <p className={`${cls.text} ${variantsError[type].className}`}>{variantsError[type].text}</p>
);

export default ErrorMessage;

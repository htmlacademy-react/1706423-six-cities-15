import cls from './empty-component.module.css';

const variantsEmpty = {
  reviews: {text: 'There are no reviews for this offer.'},
  offers: {text: 'No places in the neighbourhood.'},
};

type EmptyComponentProps = {
  type: keyof typeof variantsEmpty;
}

const EmptyComponent = ({type}: EmptyComponentProps): JSX.Element => (
  <p className={cls.text}>{variantsEmpty[type].text}</p>
);

export default EmptyComponent;

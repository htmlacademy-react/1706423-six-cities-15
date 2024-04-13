import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import {AppRoute} from '../../const';
import cls from './not-found-page.module.css';

const variants = {
  page: {text: 'Page not found'},
  offer: {text: 'Rental offer page not found'},
};

type NotFoundPageProps = {
  type: keyof typeof variants;
}

const NotFoundPage = ({type}: NotFoundPageProps): JSX.Element => (
  <>
    <Helmet>
      <title>6 cities. {variants[type].text}</title>
    </Helmet>
    <main className="page__main">
      <section className={cls.content}>
        <h1 className={cls.title}>404. {variants[type].text}</h1>
        <Link className={cls.link} to={AppRoute.Main}>Go back to the main page.</Link>
      </section>
    </main>
    <Footer />
  </>
);

export default NotFoundPage;

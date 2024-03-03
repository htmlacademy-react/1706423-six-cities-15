import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import {AppRoutes} from '../../const';
import cls from './not-found-page.module.css';

const NotFoundPage = (): JSX.Element => (
  <>
    <Helmet>
      <title>6 cities. Page not found.</title>
    </Helmet>
    <main className="page__main">
      <section className={cls.content}>
        <h1 className={cls.title}>404. Page not found</h1>
        <Link className={cls.link} to={AppRoutes.Main}>Go back to the main page.</Link>
      </section>
    </main>
    <Footer />
  </>
);

export default NotFoundPage;

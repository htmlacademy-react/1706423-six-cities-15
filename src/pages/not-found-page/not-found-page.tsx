import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

const NotFoundPage = (): JSX.Element => (
  <>
    <Helmet>
      <title>6 cities. Page not found.</title>
    </Helmet>
    <main className="page__main">
      <section style={{textAlign: 'center', padding: '15%', borderBottom: '2px solid rgba(222,222,222,.5)'}}>
        <h1>404. Page not found</h1>
        <Link to={'/'}>Go back to the main page.</Link>
      </section>
    </main>
  </>
);

export default NotFoundPage;

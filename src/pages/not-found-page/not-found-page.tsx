import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import {Link} from 'react-router-dom';

const NotFoundPage = (): JSX.Element => (
  <div className="page" style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
    <Header />
    <main className="page__main" style={{flexGrow: 1}}>
      <section style={{textAlign: 'center', margin: '10%'}}>
        <h1>404. Page not found</h1>
        <Link to={'/'}>Go back to the main page.</Link>
      </section>
    </main>
    <Footer />
  </div>
);

export default NotFoundPage;

import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {FormEvent, useRef} from 'react';
import {AppRoutes} from '../../const';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {loginUser} from '../../store/api-actions';

const LoginPage = (): JSX.Element => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      dispatch(loginUser({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  return (
    <>
      <Helmet>
        <title>6 cities. Sign in.</title>
      </Helmet>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              onSubmit={handleSubmit}
              className="login__form form"
              action="#"
              method="post"
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={emailRef}
                  className="login__input form__input"
                  type="email" name="email"
                  placeholder="Email" required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password" name="password"
                  placeholder="Password" required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoutes.Main}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default LoginPage;

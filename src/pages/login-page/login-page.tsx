import {Helmet} from 'react-helmet-async';
import {FormEvent, useMemo, useRef} from 'react';
import {CITIES_TABS, RequestStatus} from '../../const';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {fetchFavorites, fetchOffers, login} from '../../store/api-actions';
import {useAppSelector} from '../../hooks/use-app-selector';
import {userSelectors} from '../../store/slices/user-slice';
import {getRandomCity} from '../../utils';
import CityLink from '../../components/city-link/city-link';
import ErrorMessage from '../../components/error-message/error-message';

const LoginPage = (): JSX.Element => {
  const requestStatus = useAppSelector(userSelectors.status);
  const hasErrorLogin = useAppSelector(userSelectors.hasErrorLogin);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const randomCity = useMemo(() => getRandomCity(CITIES_TABS), []);

  const dispatch = useAppDispatch();

  const handleSubmitFormLogin = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      dispatch(login({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }))
        .then((response) => {
          if (response.meta.requestStatus === 'fulfilled') {
            dispatch(fetchOffers());
            dispatch(fetchFavorites());
          }
        });
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
              onSubmit={handleSubmitFormLogin}
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
                  pattern='(?=.*[0-9])(?=.*[a-zA-Z]).{2,}'
                  title='Минимум 1 цифра и 1 буква'
                />
              </div>
              <button
                disabled={requestStatus === RequestStatus.Loading}
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
              {hasErrorLogin === RequestStatus.Failed && <ErrorMessage type='login' />}
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <CityLink city={randomCity} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default LoginPage;

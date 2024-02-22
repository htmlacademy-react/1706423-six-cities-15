import {AppRoutes} from './const';

export const getClassesLayout = (pathname: AppRoutes) => {
  let classNameRoot = '';
  let classNameLink = '';

  if (pathname === AppRoutes.Main) {
    classNameRoot = 'page--gray page--main';
    classNameLink = 'header__logo-link--active';
  }

  if (pathname === AppRoutes.Login) {
    classNameRoot = 'page--gray page--login';
  }

  return {classNameRoot, classNameLink};
};

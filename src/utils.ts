import {AppRoutes, LOGIN_ROOT_CLASS, MAIN_ROOT_CLASS} from './const';

export const getClassesLayout = (pathname: AppRoutes) => {
  let classNameRoot = '';

  if (pathname === AppRoutes.Main) {
    classNameRoot = MAIN_ROOT_CLASS;
  }

  if (pathname === AppRoutes.Login) {
    classNameRoot = LOGIN_ROOT_CLASS;
  }

  return {classNameRoot};
};

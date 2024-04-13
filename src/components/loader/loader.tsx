import cls from './loader.module.css';

const Loader = (): JSX.Element => (
  <section className={cls.loader} data-testid="loader">
    <div className={cls.container}>
      <div className={cls.item}></div>
      <div className={cls.item}></div>
      <div className={cls.item}></div>
      <div className={cls.item}></div>
    </div>
  </section>
);

export default Loader;

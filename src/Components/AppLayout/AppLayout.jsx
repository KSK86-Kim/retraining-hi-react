import { NavLink, Outlet } from 'react-router-dom';
import Container from '../Container';
import CustomLink from '../CustomLink';
import s from './AppLayout.module.scss';

const AppLayout = () => {
  return (
    <>
      <header className={s.header}>
        <Container>
          <nav className={s.nav}>
            <ul className={s.list}>
              <li className={s.item}>
                <CustomLink to="/">home</CustomLink>
              </li>
              <li className={s.item}>
                <CustomLink to="/noticeboard">noticeboard</CustomLink>
              </li>
              <li className={s.item}>
                <CustomLink to="/articles">articles</CustomLink>
              </li>
            </ul>
          </nav>
        </Container>
      </header>

      <main className={s.main}>
        <Container>
          <Outlet />
        </Container>
      </main>

      <footer className={s.footer}> 2022 </footer>
    </>
  );
};

export default AppLayout;

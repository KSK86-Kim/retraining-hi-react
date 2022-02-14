import { NavLink, Outlet } from 'react-router-dom';
import Container from '../Container';
import s from './Layout.module.scss';

const Layout = () => {
  return (
    <>
      <header className={s.header}>
        <Container>
          <nav className={s.nav}>
            <ul className={s.list}>
              <li className={s.item}>
                <NavLink to="/" className={s.link}>
                  main
                </NavLink>
              </li>
              <li className={s.item}>
                <NavLink to="/home" className={s.link}>
                  home
                </NavLink>
              </li>
              <li className={s.item}>
                <NavLink to="/noticeboard" className={s.link}>
                  noticeboard
                </NavLink>
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

export default Layout;

//   <div>
//     <ul>
//       <li>
//         <Link to="/">main</Link>
//       </li>
//       <li>
//         <Link to="/home">home</Link>
//       </li>
//       <li>
//         <Link to="/noticeboard">noticeboard</Link>
//       </li>
//     </ul>
//   </div>;

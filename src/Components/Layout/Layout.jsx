import { Link, Outlet } from 'react-router-dom';
import Container from '../Container';
import s from './Layout.module.scss';

const Layout = () => {
  return (
    <>
      <header className={s.header}>
        <Container>
          <nav>
            <ul>
              <li>
                <Link to="/">main</Link>
              </li>
              <li>
                <Link to="/home">home</Link>
              </li>
              <li>
                <Link to="/noticeboard">noticeboard</Link>
              </li>
            </ul>
          </nav>
        </Container>
      </header>

      <Outlet />

      <footer> 2022 </footer>
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

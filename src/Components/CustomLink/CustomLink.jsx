import { Link, useMatch } from 'react-router-dom';
import s from './CustomLink.module.scss';
// import './CustomLink.module.scss';

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);
  //   console.log(match);
  // возращает  params object
  const linkClasses = [s.link];

  if (match) {
    linkClasses.push(s.link_active);
  }
  return (
    <Link to={to} {...props} className={linkClasses.join(' ')}>
      {match ? '>> ' : ''}

      {children}
    </Link>
  );
};

export default CustomLink;

import s from './Container.module.scss';

function Container(props) {
  return (
    <div className={s.container}>
      <h1>asdasdasqwe conteiner </h1>
      {props.children}
    </div>
  );
}

export default Container;

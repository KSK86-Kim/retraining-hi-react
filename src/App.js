import { Routes, Route } from 'react-router-dom';

import Layout from './Components/Layout';

import HomePage from './Pages/HomePage';
import NoticeboardPage from './Pages/NoticeboardPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>hi, main</div>}></Route>
          <Route path="home" element={<HomePage />}></Route>
          <Route path="noticeboard" element={<NoticeboardPage />}></Route>
          <Route path="*" element={<div>not fount 404error</div>}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;

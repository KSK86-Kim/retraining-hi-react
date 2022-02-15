// пакети
import { Routes, Route } from 'react-router-dom';
//  end

// базавая настройка шапки и подвала, маршутизация
import AppLayout from './Components/AppLayout';
//  end

// страници
import HomePage from './Pages/HomePage';

import NoticeboardPage from './Pages/NoticeboardPage';

import ArticlesPage from './Pages/ArticlesPage';
import ArticlePage from './Pages/ArticlePage';

import NotFoundPage from './Pages/NotFoundPage';
//  end

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />

          <Route path="noticeboard" element={<NoticeboardPage />} />

          <Route path="articles" element={<ArticlesPage />} />
          <Route path="articles/:id" element={<ArticlePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

import CreatePage from 'pages/CreatePage';
import DetailPage from 'pages/DetailPage';
import EditPage from 'pages/EditPage';
import KakaoAuthPage from 'pages/KakaoAuthPage';
import MainPage from 'pages/MainPage';
import MyPage from 'pages/MyPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { TagProvider } from 'components/createpage/TagProvider';

function App() {
  return (
    <>

      <TagProvider>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/mypage'} element={<MyPage />} />
          <Route path={'/detail/:postId'} element={<DetailPage />} />
          <Route path={'/create'} element={<CreatePage />} />
          <Route path={'/edit/:postId'} element={<EditPage />} />
        </Routes>
      </TagProvider>

    </>
  );
}

export default App;

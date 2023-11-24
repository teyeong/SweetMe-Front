import CreatePage from 'pages/CreatePage';
import DetailPage from 'pages/DetailPage';
import EditPage from 'pages/EditPage';
import KakaoAuthPage from 'pages/KakaoAuthPage';
import MainPage from 'pages/MainPage';
import MyPage from 'pages/MyPage';
import ErrorPage from 'pages/ErrorPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/oauth/kakao/callback'} element={<KakaoAuthPage />} />
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/mypage'} element={<MyPage />} />
        <Route path={'/detail/:postId'} element={<DetailPage />} />
        <Route path={'/create'} element={<CreatePage />} />
        <Route path={'/edit/:postId'} element={<EditPage />} />
        <Route path={'/*'} element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;

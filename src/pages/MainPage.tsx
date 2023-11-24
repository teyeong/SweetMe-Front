import Header from 'components/_common/Header';
import Footer from 'components/_common/Footer';
import AdList from 'components/mainpage/AdList';
import StudyList from 'components/mainpage/StudyList';

const MainPage = () => {
  return (
    <>
      <Header />
      <AdList />
      <StudyList />
      <Footer />
    </>
  );
};

export default MainPage;

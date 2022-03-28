import React from 'react';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import PageLayout from '../components/layout';
import { MainPage, CatalogPage } from '../components/pages';
import { GlobalStyle } from './styles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={
            <PageLayout>
              <MainPage />
            </PageLayout>
          } />
          <Route path='/catalog/:category' element={
            <PageLayout>
              <CatalogPage />
            </PageLayout>
          } />
        </Routes>
      </Router>
    </>
  );
}


export default App;

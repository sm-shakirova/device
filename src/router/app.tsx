import React from 'react';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import PageLayout from '../components/layout';
import { MainPage, CatalogPage } from '../components/pages';
import { GlobalStyle } from './styles';

export interface IAppProps {
}

const App: React.FC<IAppProps> = () => {
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
          <Route path='/catalog' element={
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

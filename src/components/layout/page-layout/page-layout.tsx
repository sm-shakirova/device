import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

export interface IPageWrapperProps {
  children: React.ReactChild | React.ReactChildren;
}

const PageLayout: React.FC<IPageWrapperProps> = ({children}) => {
  console.log(children);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
};

export default PageLayout;

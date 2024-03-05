import * as React from 'react';
import Header from '../components/Header';

const IndexPage = () => {
  return (
    <main>
      <Header/>
      <div class="container mx-auto px-4"></div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

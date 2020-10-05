import React from 'react';

// Components
import SearchForm from './components/SearchForm';
import SearchHistory from './components/SearchHistory';

function Home() {
  return (
    <>
      <SearchForm />
      <SearchHistory />
    </>
  );
}

export default Home;

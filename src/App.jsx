import React from 'react';
import { StarWarsProvider } from './context/Context';
import MainLayout from './components/templates/MainLayout';

const App = () => {
  return (
    <StarWarsProvider>
      <MainLayout />
    </StarWarsProvider>
  );
}

export default App;
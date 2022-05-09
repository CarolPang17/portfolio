import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [categories] = useState([
    {
      name: 'portfolio',
      description: 'Welcome checkout the app that i created!',
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>

      <Header/>

      <Footer />
    </div>
  );
}

export default App;

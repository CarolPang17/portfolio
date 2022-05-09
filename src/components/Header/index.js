import React, { useState } from 'react';
import Nav from '../Nav';
import About from '../About';
import ContactForm from '../Contact';
import Footer from '../Footer';
import Portfolio from '../Portfolio';

function Header() {
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
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
           <About></About>
            <Portfolio currentCategory={currentCategory}></Portfolio>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default Header;
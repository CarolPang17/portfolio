import React, { useState } from 'react';
import Project from '../Project';

const PhotoList = ({ category }) => {
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'MyTeam',
      category: 'portfolio',
      github:
      "https://github.com/CarolPang17/jest-test-and-Inquirer-Team-Profile-Generator",
      url: "https://carolpang17.github.io/jest-test-and-Inquirer-Team-Profile-Generator/sample.html"
    },
    {
      name: 'MVC',
      category: 'portfolio',
      github:
      "https://github.com/CarolPang17/mvc-tech-blog",
      url: "https://warm-escarpment-73201.herokuapp.com/"
    },
    {
      name: 'Commute',
      category: 'portfolio',
      github:
      "https://github.com/ngranzow/gas-guzzlers",
      url: "https://mysterious-plateau-73573.herokuapp.com/"
    },
    {
      name: 'Fridge',
      category: 'portfolio',
      github:
      "https://github.com/noellecrow/fridgefoods",
      url: "https://noellecrow.github.io/fridgefoods/"
    },
    {
      name: 'NoteTaker',
      category: 'portfolio',
      github:
      "https://github.com/CarolPang17/Express-Note-Taker",
      url: "https://quiet-dusk-16447.herokuapp.com/"
    }
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleProject = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsProjectOpen(!isProjectOpen);
  };

  return (
    <div>
      {isProjectOpen && (
        <Project onClose={toggleProject} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleProject(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;

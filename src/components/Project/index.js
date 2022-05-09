import React from "react";

const Project = ({ onClose, currentPhoto,  }) => {
  const { name, github, url, category, index } = currentPhoto;

  return (
    <div className="projectBackdrop">
      <div className="projectContainer">
        <h3 className="projectTitle">{name} </h3>
        <img
          src={require(`../../assets/small/${category}/${index}.jpg`).default}
          alt="current category"
        />
        <div class="card-body">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <button>Website</button>
          </a>
        </div>
        <button type="button" onClick={onClose}>
          Close this project
        </button>
      </div>
    </div>
  );
};

export default Project;

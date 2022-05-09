import React from "react";

const Modal = ({ onClose, currentPhoto,  }) => {
  const { name, github, url, category, index } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
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

export default Modal;

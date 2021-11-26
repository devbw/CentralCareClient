import React, {useState} from "react";
import Navigation from "../components/Navigation";

const Createpost = () => {

  const [title, setTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [city, setCity] = useState('');

  return (
    <div className="create-container">
      <Navigation />
      <h1>Créez votre annonce</h1>
      <div className="postform-container">
        <form>
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Titre de l'annonce"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="postContent">Contenu de l'annonce</label>
          <input
            type="text"
            name="postContent"
            id="postContent"
            placeholder="Je recherche..."
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            required
          />
          <label htmlFor="city">Ville</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Lyon, 69000"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </form>
      </div>
    </div>
  );
};

export default Createpost;

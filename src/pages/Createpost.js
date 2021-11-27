import React, { useState } from "react";
import Navigation from "../components/Navigation";
import axios from 'axios';

const Createpost = () => {
  const [title, setTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  const publishPost = (e) => {
    e.preventDefault();
    axios.post('https://www.facebook.com/', {
      title,
      postContent,
      city,
      price
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    })
  }

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
          <label htmlFor="story">Contenu de l'annonce</label>
          <textarea
            id="story"
            name="story"
            rows="5"
            cols="33"
            placeholder="Je propose mes services de..."
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          ></textarea>
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
          <label htmlFor="price">Prix à l'heure</label>
          <input
            type="range"
            name="price"
            id="price"
            placeholder="10€/h"
            min="8"
            max="30"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <span>{price}€/h</span>
          <button type="submit" onClick={publishPost}>Poster</button>
        </form>
      </div>
    </div>
  );
};

export default Createpost;

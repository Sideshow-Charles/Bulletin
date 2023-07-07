import React from "react";
import HeroSection from "../assets/HeroSection.css";
import MainArticleImage from "../assets/images/Main Article Image.png";
import UserAvatar from "../assets/images/User Avatar.png";
import axios from "axios";
import { useState } from "react";


const getPosts = () => {
   axios
    .get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=M2nyRIxGW6nFWDGCfQ3SPD5QAYmbq6Cm`)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
};

getPosts()



const heroSection = () => {
  return (
    <div className="hero-section__container">
      <div className="main-article__container">
        <img src={MainArticleImage} alt="article thumbnail" />

        <div className="main-article__content__container">
          <h2 className="main-article__header">
          Weekly Newsletter: Tweets for Higher Engagements
          </h2>
          <h4 className="main-article__content">
            In this weekly newsletter, we will be covering ten types of engaging
            tweets. This is the guide if you're just starting out on Twitter.
          </h4>
          <div className="article-author__container">
            <img src={UserAvatar} alt="author image" />
            <h4 className="author__name">Jessica Andrews</h4>
            <h4 className="author__role">Content Manager</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default heroSection;

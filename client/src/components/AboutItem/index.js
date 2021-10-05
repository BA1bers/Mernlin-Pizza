import React from "react";

function AboutCard(card) {

  const {
    image,
    fullName,
    keyword,
    description
  } = card;

  return (
    <div className="card px-1 py-1">
      <img src={image} alt="Portriot"></img>
      <div>{fullName}</div>
      <div>{keyword}</div>
      <div>{description}</div>
    </div>
  );
}

export default AboutCard;

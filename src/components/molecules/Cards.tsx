import React from 'react';
import '../../styles/Cards.css'

type CardProps = {
  title: string;
  description: string;
  date: string;
};

const Card = (props: CardProps) => {
  return (
    <div className="card">
      <h3 className="card-title">{props.title}</h3>
      <p className="card-description">{props.description}</p>
      <p className="card-date">Published on: {props.date}</p>
    </div>
  );
};

export default React.memo(Card);

import React from 'react';
import './card.styles.css';

export const Card = (props) => {
  let str = '';
  let types = props.pokemon.types;
  for(let i=0; i < types.length; i++) {
    if(i === types.length - 1) {
      str = str + types[i];
    } else {
      str = str + types[i] + ', '
    }
  }
  let s = '#' + props.pokemon.id;
  return (
    <div className='card-container'>
      <div className='card-image'>
        <img 
        alt={props.pokemon.name}
        src={`https://pokeres.bastionbot.org/images/pokemon/${props.pokemon.id}.png`}
        width="180"
        height="180"
        />
      </div>
      <div className='card-text'>
        <span className='date'>{s}</span>
        <h1> {props.pokemon.name} </h1>
        <h3> {str}</h3>
      </div>
      <div className='card-stats'>
        <div className='stat'>
          <div className='type'>HP</div>
          <div className='value'>{props.pokemon.health}</div>
        </div>
        <div className='stat border'>
          <div className='type'>ATK</div>
          <div className='value'>{props.pokemon.attack}</div>
        </div>
        <div className='stat'>
          <div className='type'>DEF</div>
          <div className='value'>{props.pokemon.defense}</div>
        </div>
      </div>
    </div>
  );
}


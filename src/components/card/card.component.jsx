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
  let cls = 'card-stats ' + types[0];
  return (
    <div className='card-container'>
      <div className='card-image'>
        <img 
        alt={props.pokemon.name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`}
        width="180"
        height="180"
        />
      </div>
      <div className='card-text'>
        <span className='date'>{s}</span>
        <h1> {props.pokemon.name} </h1>
        <div className='tps'>
          {types.map(e => (<div className={e + 'T'}>{e}</div>))}
        </div>
      </div>
      <div className={cls}>
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


import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      pokemon: [],
      searchField: ''
    };
  }

  componentDidMount() {
    let temp = []
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => response.json())
      .then(allPokemon => {
        allPokemon.results.forEach(p => {
          fetch(p.url)
            .then(res => res.json())
            .then(poke => {
              let arr = [];
              let test = poke.stats;
              let hp = test[0].base_stat;
              let atk = test[1].base_stat;
              let def = test[2].base_stat;
              let test2 = poke.types;
              for(let i=0; i<test2.length; i++){
                  arr.push(test2[i].type.name);
              }
              temp.push({
                  id: poke.id,
                  name: poke.name,
                  health: hp,
                  attack: atk,
                  defense: def,
                  types: arr 
              })
            })
        })
      });
      this.setState({pokemon: temp});
  }  
  render() {
    return (
      <div className='App'>
        <CardList pokemon={this.state.pokemon}/>
      </div>
    );
  }
}

export default App;

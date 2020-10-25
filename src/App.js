import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

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
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
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
  
  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }
  
  render() {
    const { pokemon, searchField } = this.state;
    const filteredPoke = pokemon.filter(p => p.name.includes(searchField.toLowerCase()));
    return (
      <div className='App'>
        <h1>PokéDex</h1>
        <SearchBox 
          placeHolder='Seach Pokemon'
          handleChange={this.handleChange}
        />
        <CardList pokemon={filteredPoke}/>
      </div>
    );
  }
}

export default App;

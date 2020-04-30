import React from "react";
import axios from "axios";
import styled from "styled-components";

const Main = styled.div`
display: grid;
grid-template-columns: 2fr 1fr 2fr;
grid-template-rows: 1fr;
`
const SectionPoke = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Vencedor = styled.div`
  text-align:center;
  font-size:2rem;
`
const PokemonName = styled.strong`
font-size: 2.5rem;
`

const Titulo = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 40px 0;
  text-align: center;
`

const PokemonImg = styled.img`
width: 200px;
border: 1px solid black;
margin-top: 30px;
`
class App extends React.Component {
  state = {
    pokeList: [],
    pokeImage1: "",
    pokeHeight1: "",
    pokeName1: "",
    pokeImage2: "",
    pokeHeight2: "",
    pokeName2: ""
  };

  componentDidMount = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=964")
      .then(response => {
        this.setState({ pokeList: response.data.results });
      })
      .catch(err => {
        console.log(err);
      });
  };

  pegaPokemon1 = event => {
    const pokeName = event.target.value;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        console.log(response.data.sprites.front_default);
        this.setState({ pokeImage1: response.data.sprites.front_default, pokeHeight1: response.data.height, pokeName1: response.data.name });
      })
      .catch(err => {
        console.log(err);
      });
  };
  pegaPokemon2 = event => {
    const pokeName = event.target.value;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        console.log(response.data.sprites.front_default);
        this.setState({ pokeImage2: response.data.sprites.front_default, pokeHeight2: response.data.height, pokeName2: response.data.name });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const image1 = this.state.pokeImage1 ? (
      <PokemonImg src={this.state.pokeImage1} alt="pokemon" />
    ) : (
      <div />
    );
    const image2 = this.state.pokeImage2 ? (
      <PokemonImg src={this.state.pokeImage2} alt="pokemon" />
    ) : (
      <div />
    );
    const altura1 = this.state.pokeHeight1 ? (
      <p>{this.state.pokeHeight1}</p>
    ) : (
      <div />
    );
    const altura2 = this.state.pokeHeight2 ? (
      <p>{this.state.pokeHeight2}</p>
    ) : (
      <div />
    );

    let vencedor = <div/>
    if(this.state.pokeHeight1 && this.state.pokeHeight2){
      if(this.state.pokeHeight1 > this.state.pokeHeight2){
        vencedor = (<Vencedor><PokemonName>{this.state.pokeName1}</PokemonName> é maior que <PokemonName>{this.state.pokeName2}</PokemonName>!</Vencedor>)
      }else if(this.state.pokeHeight1 < this.state.pokeHeight2){
        vencedor = (<Vencedor><PokemonName>{this.state.pokeName2}</PokemonName> é maior que <PokemonName>{this.state.pokeName1}</PokemonName>!</Vencedor>)
      }else{
        vencedor = (<Vencedor><PokemonName>{this.state.pokeName1}</PokemonName> e <PokemonName>{this.state.pokeName2}</PokemonName> tem a mesma altura!</Vencedor>)
      }
    }else{
      vencedor = (<div/>)
    }

    return (
      <main>
      <Titulo>POKEMON: UMA BATALHA DE ALTURAS</Titulo>
      <Main>
      <SectionPoke>
        <select onChange={this.pegaPokemon1}>
          <option value={""}>Nenhum</option>
          {this.state.pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        <div>{image1}</div>
        {altura1}
        </SectionPoke>
        <Titulo>VS</Titulo>
        <SectionPoke>
        <select onChange={this.pegaPokemon2}>
          <option value={""}>Nenhum</option>
          {this.state.pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        <div>{image2}</div>
        {altura2}
        </SectionPoke>
      </Main>
        {vencedor}
        </main>
    );
  }
}

export default App;

import * as React from 'react';

import { pokeData } from '../../constant/poke-data/pokemon';
import { PokeDataEntity } from 'src/constant/entity/pokedata.entity';
import PokeCard from 'src/components/pokemon/PokeCard';

interface PokeBookProp {
}

interface PokeBookState {
  pokeData: PokeDataEntity[];
}

class PokeBook extends React.Component<PokeBookProp, PokeBookState> {
  constructor(prop: PokeBookProp) {
    super(prop);
    this.state = {
      pokeData: pokeData,
    };
  }

  // public cardList() {
  //   for (const pokemon of this.state.pokeData) {
  //     cardList.push(
  //       <div>
  //         <PokeCard mediaSrc={`../../../data/thumbnails/${pokemon.id}${pokemon.name.english}.png`} pokeName={pokemon.name.japanese}></PokeCard>
  //       </div>
  //     );
  //   }
  // }

  public render() {
    const cardList = [] as any;
    for (const pokemon of this.state.pokeData) {
      cardList.push(
        <div>
          <PokeCard key={pokemon.id} mediaSrc={`data\thumbnails\001Bulbasaur.png`} pokeName={pokemon.name.japanese}></PokeCard>
        </div>
      );
    }

    return (
      <div className="poke-book">
        <h3>Pokebook</h3>
        {cardList}
      </div>
    );
  }
}

export default PokeBook;

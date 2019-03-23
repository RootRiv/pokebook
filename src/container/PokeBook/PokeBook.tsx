import * as React from 'react';

import { pokeData } from '../../constant/poke-data/pokemon';
import { PokeDataEntity } from 'src/constant/entity/pokedata.entity';
import PokeCard from 'src/components/pokemon/PokeCard';
import './PokeBook.css';

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

  // Todo: 共通化する
  private zeroPadding(num: number, length: number) {
    return ('0000000000' + num).slice(-length);
  }

  public render() {
    const cardList = [] as any;
    for (const pokemon of this.state.pokeData) {
      cardList.push(
        <div key={pokemon.id} >
          No.{this.zeroPadding(pokemon.id, 3)}
          <PokeCard mediaSrc={`${process.env.PUBLIC_URL}/thumbnails/${this.zeroPadding(pokemon.id, 3)}${pokemon.name.english}.png`} pokeName={pokemon.name.japanese}></PokeCard>
        </div>
      );
    }

    return (
      <div className="poke-book">
        <h3>Pokebook</h3>
        <div className="card-area">
          {cardList}
        </div>
      </div>
    );
  }
}

export default PokeBook;

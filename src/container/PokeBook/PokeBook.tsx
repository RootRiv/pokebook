import * as React from 'react';

import { Theme } from '@material-ui/core/styles/createMuiTheme';

import { pokeData } from '../../constant/poke-data/pokemon';
import { pokeTypeList } from '../../constant/poke-data/pokeType';
import { PokeDataEntity } from 'src/constant/entity/pokedata.entity';
import PokeCard from 'src/components/pokemon/PokeCard';
import './PokeBook.css';
// import TextField from '@material-ui/core/TextField';
import { FormControl, InputLabel, Select, withStyles, WithStyles } from '@material-ui/core';

const styles = (theme: Theme) => {
  return {
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
  };
}

interface PokeBookProp extends WithStyles<typeof styles> {
  inputType: string
}

interface PokeBookState {
  pokeData: PokeDataEntity[],
  inputType: string
}

class PokeBook extends React.Component<PokeBookProp, PokeBookState> {
  private viewPokeDataList: PokeDataEntity[] | undefined | null;

  constructor(prop: PokeBookProp) {
    super(prop);
    this.viewPokeDataList = pokeData.slice(0, 151);
    this.state = {
      pokeData: this.viewPokeDataList,
      inputType: ''
    };
    this.setInputType = this.setInputType.bind(this);
  }

  // Todo: 共通化する
  private zeroPadding(num: number, length: number) {
    return ('0000000000' + num).slice(-length);
  }

  public setInputType(event: React.ChangeEvent<HTMLSelectElement>) {
    const type = event.target.value;
    let pokeDataList = pokeData.filter((poke) => {
      return poke.type.includes(type);
    });
    if (type === "") {
      pokeDataList = pokeData;
    }

    this.setState({
      pokeData: pokeDataList,
      inputType: type
    } as PokeBookState);
  }


  public render() {
    const classes = this.props.classes;
    const cardList = [] as any;
    for (const pokemon of this.state.pokeData) {
      cardList.push(
        <div key={pokemon.id} >
          No.{this.zeroPadding(pokemon.id, 3)}
          <PokeCard mediaSrc={`${process.env.PUBLIC_URL}/thumbnails/${this.zeroPadding(pokemon.id, 3)}${pokemon.name.english}.png`} pokeName={pokemon.name.japanese}></PokeCard>
        </div>
      );
    }

    const optionList = [(<option value=""></option>)];
    for (const pokeType of pokeTypeList) {
      optionList.push(
        <option value={pokeType.english}>{pokeType.japanese}</option>
      );
    }

    return (
      <div className="poke-book">
        <h3>Pokebook</h3>
        {/* <TextField
          id="outlined-name"
          label="Type"
          onChange={this.setInputType}
          margin="normal"
          variant="outlined"
        /> */}

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="type-native-simple">Type</InputLabel>
          <Select
            native
            value={this.state.inputType}
            onChange={this.setInputType}
            inputProps={{
              name: '',
              id: 'type-native-simple',
            }}
          >
            {optionList}
          </Select>
        </FormControl>

        <div className="card-area">
          {cardList}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PokeBook);

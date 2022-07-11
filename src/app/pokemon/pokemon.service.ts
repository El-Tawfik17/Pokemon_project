import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

   getPokemonList():Pokemon[]{

    return POKEMONS;
   }
   getPokemonById(pokemonId:number):Pokemon|undefined{
    const pokemonList =POKEMONS;
     return pokemonList.find(pokemon=>pokemon.id == pokemonId);
   }
   getPokemonTypeList():string[]{
     return ['Plante',
    'Feu',
    'Eau',
    'Insecte',
    'Vol',
    'poison',
    'Normal',
    'Electrik',
    'Psy',
    'Fée',
    'combat'];
   }
}

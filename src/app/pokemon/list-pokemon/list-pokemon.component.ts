import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../Pokemon';
import { POKEMONS } from '../mock-pokemons';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl:'./list-pokemon.component.html' ,
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit {
  pokemonList:Pokemon[];
  constructor( private pokemonService:PokemonService,
    private router:Router) { }

  ngOnInit(): void {
    this.pokemonList=this.pokemonService.getPokemonList();
  }
  goToPokemonDetail(pokemon:Pokemon){
    this.router.navigate(['/pokemon',pokemon.id]);
  }

}

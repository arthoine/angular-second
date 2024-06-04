import {Injectable} from '@angular/core';
import { AbilityList, PokemonResponse, PokemonUnique} from "../interface/pokemonInterface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://pokeapi.co/api/v2/pokemon?limit=5000';

  async getAllPokemon(): Promise<PokemonResponse> {
    const response = await fetch(this.url);
    return await response.json() ?? {results: []};
  }

  async getPokemon(pokemonUrl: string): Promise<PokemonUnique> {
    const response = await fetch(pokemonUrl);
    return await response.json() ?? {results: []};
  }

  async getAbility(abilityUrl: string) {
    const response = await fetch(abilityUrl);
    const data = await response.json();
    let abilities: Promise<AbilityList>[] = [];

    data.names.forEach((
      ability: {
        language: {
          name: string;
          url: string;
        };
        name: string;
      }
    ) => {
      if (ability.language.name == 'fr') {
        abilities.push({
          name: ability.name,
          url: ability.language.url
        });
      }
    });

    console.log(abilities);
    return await abilities;
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}

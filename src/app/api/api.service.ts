import { Injectable } from '@angular/core';

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonResponse {
  results: Pokemon[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://pokeapi.co/api/v2/pokemon';

  async getAllPokemon(): Promise<PokemonResponse> {
    const response = await fetch(this.url);
    return await response.json() ?? { results: [] };
  }

  async getPokemonById(id: number): Promise<Pokemon | undefined> {
    const response = await fetch(`${this.url}/${id}`);
    return await response.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}

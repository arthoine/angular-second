import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PokemonUnique } from "../../interface/pokemonInterface";

@Component({
  selector: 'app-external-redirect',
  template: `
    <div *ngIf="pokemonData" class="p-4 bg-white rounded shadow-md">
      <h1 class="text-3xl font-bold mb-4">{{ pokemonData.name }}</h1>

      <div class="grid grid-cols-3 gap-4">
        <div>
          <p class="text-lg"><strong>Height:</strong> {{ pokemonData.height }}</p>
          <p class="text-lg"><strong>Weight:</strong> {{ pokemonData.weight }}</p>
        </div>

        <div>
          <p class="text-lg"><strong>Height:</strong> {{ pokemonData.height }}</p>
          <p class="text-lg"><strong>Weight:</strong> {{ pokemonData.weight }}</p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mt-6">Abilities</h2>
          <ul class="list-disc pl-5">
            <li *ngFor="let ability of pokemonData.abilities" class="text-lg">
              {{ ability.ability.name }} (Hidden: {{ ability.is_hidden ? 'Yes' : 'No' }}, Slot: {{ ability.slot }})
            </li>
          </ul>
        </div>
      </div>



      <h2 class="text-2xl font-semibold mt-6">Cries</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p class="text-lg"><strong>Latest:</strong> <a [href]="pokemonData.cries.latest" target="_blank" class="text-blue-500 underline">Play</a></p>
        <p class="text-lg"><strong>Legacy:</strong> <a [href]="pokemonData.cries.legacy" target="_blank" class="text-blue-500 underline">Play</a></p>
      </div>

      <h2 class="text-2xl font-semibold mt-6">Forms</h2>
      <ul class="list-disc pl-5">
        <li *ngFor="let form of pokemonData.forms" class="text-lg">
          {{ form.name }}
        </li>
      </ul>

      <h2 class="text-2xl font-semibold mt-6">Game Indices</h2>
      <ul class="list-disc pl-5">
        <li *ngFor="let index of pokemonData.game_indices" class="text-lg">
          {{ index.version.name }} (Index: {{ index.game_index }})
        </li>
      </ul>

      <h2 class="text-2xl font-semibold mt-6">Moves</h2>
      <ul class="list-disc pl-5">
        <li *ngFor="let move of pokemonData.moves" class="text-lg">
          {{ move.move.name }}
        </li>
      </ul>

      <h2 class="text-2xl font-semibold mt-6">Species</h2>
      <p class="text-lg">{{ pokemonData.species.name }}</p>

      <h2 class="text-2xl font-semibold mt-6">Sprites</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <img [src]="pokemonData.sprites.front_default" alt="{{ pokemonData.name }} front default" class="w-full">
        <img [src]="pokemonData.sprites.back_default" alt="{{ pokemonData.name }} back default" class="w-full">
        <img [src]="pokemonData.sprites.front_shiny" alt="{{ pokemonData.name }} front shiny" class="w-full">
        <img [src]="pokemonData.sprites.back_shiny" alt="{{ pokemonData.name }} back shiny" class="w-full">
      </div>

      <h2 class="text-2xl font-semibold mt-6">Stats</h2>
      <ul class="list-disc pl-5">
        <li *ngFor="let stat of pokemonData.stats" class="text-lg">
          {{ stat.stat.name }}: {{ stat.base_stat }} (Effort: {{ stat.effort }})
        </li>
      </ul>

      <h2 class="text-2xl font-semibold mt-6">Types</h2>
      <ul class="list-disc pl-5">
        <li *ngFor="let type of pokemonData.types" class="text-lg">
          {{ type.type.name }}
        </li>
      </ul>
    </div>

    <div *ngIf="!pokemonData" class="p-4 bg-white rounded shadow-md">
      <p class="text-lg">Loading...</p>
    </div>
  `,
  standalone: true,
  styleUrls: ['./pokemon.component.scss'],
  imports: [CommonModule, RouterLink]
})

export class PokemonComponent implements OnInit {
  pokemonData !: PokemonUnique;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.fetchPokemonData();
  }

  async fetchPokemonData() {
    const url = localStorage.getItem('pokemonUrl');
    if (url) {
      try {
        this.pokemonData = await this.apiService.getPokemon(url);

        this.pokemonData.abilities.forEach((Ability) =>
          this.apiService.getAbility(Ability.ability.url)
        );

      } catch (error) {
        console.error('Error fetching Pokémon data', error);
      }
    } else {
      console.error('No Pokémon URL found in local storage');
      this.router.navigate(['/']);
    }
  }
}

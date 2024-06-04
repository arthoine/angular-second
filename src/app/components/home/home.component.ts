import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../service/api.service';
import { RouterLink } from "@angular/router";
import { PokemonList } from "../../interface/pokemonInterface";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <div class="simple-container">
      <div class="home-container">
        <h1 class="text-3xl font-bold underline text-primary"> {{ title }} </h1>
        <p class="mt-4 text-secondary"> This is a simple Angular component using SCSS and Tailwind CSS with custom colors. </p>
        <ul class="mt-6 list-disc list-inside">
          <li *ngFor="let pokemon of pokemonList" class="text-lg text-primary">
            {{ pokemon.name }}
            <button
              (click)="storePokemonUrl(pokemon.url)"
            >info</button>
          </li>
        </ul>
      </div>
    </div>
  `,
  standalone: true,
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, RouterLink]
})
export class HomeComponent implements OnInit {
  title = 'Simple Component';
  pokemonList: PokemonList[] = [];

  constructor(private apiService: ApiService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    const data = await this.apiService.getAllPokemon();
    this.pokemonList = data.results;
  }

  storePokemonUrl(url: string) {
    localStorage.setItem('pokemonUrl', url);
    this.router.navigate(['/external']);
  }

  protected readonly encodeURIComponent = encodeURIComponent;
}

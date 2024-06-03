import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, Pokemon } from '../api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {
  title = 'Simple Component';
  pokemonList: Pokemon[] = [];

  constructor(private apiService: ApiService) { }

  async ngOnInit(): Promise<void> {
    const data = await this.apiService.getAllPokemon();
    this.pokemonList = data.results;
    console.log('Pokemon list loaded', this.pokemonList);
  }
}

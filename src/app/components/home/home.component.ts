import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { RouterLink } from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <div class="simple-container">
      <div class="home-container">
        <h1 class="text-3xl font-bold underline text-primary"> {{ title }} </h1>
      </div>
    </div>
  `,
  standalone: true,
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, RouterLink]
})
export class HomeComponent implements OnInit {
  title = 'Simple Component';

  ngOnInit(): void {
    console.log('Home component loaded');
  }
  constructor(private apiService: ApiService, private router: Router) { }
}

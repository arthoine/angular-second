import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://pokeapi.co/api/v2/pokemon?limit=5000';

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}

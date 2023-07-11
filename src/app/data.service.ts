import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,concat } from 'rxjs';
import { toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData()
    this.getPokemonApi()
  }

  getData() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    return this.http.get(url)
  }

  urlTest: any[] = [];

  // getPokemonApi() {
  //   const url = 'https://pokeapi.co/api/v2/pokedex/1'
  //   const url2 = 'https://pokeapi.co/api/v2/pokemon/1'
  //   return this.http.get(url2)

  // }



  getPokemonApi() {
    const requests = [];

    for (let id = 1; id <= 1010; id++) {
      requests.push(this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`));
    }
    //merge requests as string
    return concat(...requests);
  }


}

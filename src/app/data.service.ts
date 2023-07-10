import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  getPokemonApi() {
    const url = 'https://pokeapi.co/api/v2/pokedex/1'
    return this.http.get(url)
  }
}

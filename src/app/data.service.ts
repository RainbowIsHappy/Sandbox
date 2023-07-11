import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concat,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData()
    this.getPokemonApi()
    this.getPokemonApi2()
  }

  getData() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    return this.http.get(url)
  }

  getPokemonApi() {
    const requests = [];

    for (let id = 1; id <= 1010; id++) {
      requests.push(this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`));
    }
    //merge requests as string
    return concat(...requests);
  }

  getPokemonApi2() {
    return this.http.get('https://pokeapi.co/api/v2/pokedex/1')
      .pipe(map( (res: any) => this.convertData(res['pokemon_entries']) ))
  }

  convertData(array: Array<any>) {
    let data = []
    for (let index = 0; index < array.length; index++) {
      let _getData = {
        "_id": array[index]['entry_number'],
        "name": array[index]['pokemon_species']['name'],
        "url": 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + array[index]['entry_number'] + '.png',
      }
      data.push(_getData)
    }
    return data
  }

}

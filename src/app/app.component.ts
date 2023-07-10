import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private dataSer: DataService) { }

  num: any;
  output: any = '';

  loop1(num: any) {

    for (let index = 1; index <= num; index++) {
      console.log('*'.repeat(index))
      this.output += '*'.repeat(index) + '<br>';
    }
    for (let index = num - 1; index >= 1; index--) {
      console.log('*'.repeat(index))
      this.output += '*'.repeat(index) + '<br>';
    }

    for (let index = num; index >= 1; index--) {
      console.log('*'.repeat(index))
      this.output += '*'.repeat(index) + '<br>';
    }
    for (let index = 2; index <= num; index++) {
      console.log('*'.repeat(index))
      this.output += '*'.repeat(index) + '<br>';
    }
  }

  data: any[] = [];
  getApi() {
    this.dataSer.getData().subscribe(res => {
      for (let index = 0; index < Object.values(res).length; index++) {
        this.data.push(Object.values(res)[index])
      }
      this.convertData(this.data)
      console.log(this.data)
    })
  }

  dataSorted: any[] = [];
  convertData(_getData: any) {
    let _data = [];
    for (let index = 0; index < _getData.length; index++) {
      _data.push({
        'userid': _getData[index]['userId'],
        'id': _getData[index]['id'],
        'title': _getData[index]['title'],
        'body': _getData[index]['body'],
      })
      this.dataSorted = _data
      console.log('data here', index, '= ', this.dataSorted)
    }
  }

  dataPoke: any[] = [];
  getPokemon() {
      this.dataSer.getPokemonApi().subscribe(res => {
      console.log(res)
      this.dataPoke = Object.values(res)[5];
      console.log(this.dataPoke)
    })
  }

  // dataPokeSorted: any[] = [];
  // convertPokeData(_getData: any) {
  //   let _data = [];
  //   for (let index = 0; index < _getData.length; index++) {
  //     _data.push({
  //       'name': _getData[index]['name'],
  //       'ability': _getData[index]['ability'],
  //     })
  //     this.dataPokeSorted = _data
  //     console.log(this.dataPokeSorted)
  //   }
  // }

}

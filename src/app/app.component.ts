import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private dataSer: DataService) { }

  ngOnInit(): void {
    this.getApi()
    this.getPokemon()
  }

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
      // console.log(this.data)
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
      // console.log('data here', index, '= ', this.dataSorted)
    }
  }

  dataPoke: any[] = [];
  getPokemon() {
      this.dataSer.getPokemonApi().subscribe(res => {
        console.log("res here", res)
        // for (let index = 0; index < 1; index++) {
          // this.dataPoke.push(Object.values(res))
        // }
        this.dataPoke.push(res)
        console.log("res here2", this.dataPoke)
        // this.convertPokeData(this.dataPoke)
    })
  }
}

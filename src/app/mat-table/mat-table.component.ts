import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnInit {
  constructor(private dataSer: DataService) { }

  ngOnInit(): void {
    this.getApi()
    this.getPokemon()
    this.getPokemon2()
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
      this.dataPoke.push(res)
    })
  }

  dataPoke2: any[] = [];
  getPokemon2() {
    this.dataSer.getPokemonApi2().subscribe(data => {
      console.log("res hereeeeeee", data)

      this.dataPoke2 = data
      console.log("res here2", this.dataPoke2)

    })
  }
}

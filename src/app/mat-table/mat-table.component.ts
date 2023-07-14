import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  entry_number: number;
  name: string;
  url: string;
}

const matTableData : PeriodicElement[] = []

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnInit {
  constructor(private dataSer: DataService) {
    this.dataSrc = new MatTableDataSource<PeriodicElement>(matTableData);
  }

  ngOnInit(): void {
    this.getPokemon2()
  }

  ngAfterViewInit() {
    this.dataSrc.paginator = this.paginator1;
  }

  dataSrc = new MatTableDataSource<PeriodicElement>([]);
  displayColumns: any[] = ['entry_number', 'name', 'url']
  @ViewChild('paginator1', { static: true }) paginator1: MatPaginator | any;

  dataPoke2: any[] = [];
  getPokemon2() {
    this.dataSer.getPokemonApi2().subscribe(data => {
      console.log("res hereeeeeee", data)

      this.dataSrc.data = data
      console.log("res here2", this.dataSrc.data)
    })
  }

}


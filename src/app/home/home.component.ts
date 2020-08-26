import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../shared/consultas.service';
import { Personaje } from 'src/app/shared/models/personaje';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allPersonajes: Personaje[] = [];

  constructor(private consultas: ConsultasService) {}

  ngOnInit() {
    this.getPersonajes();
  }

  async getPersonajes() {
    let url = '';
    for (let i = 1; i < 6; i++) {
      url = '/people/?page=' + i;
      await this.realizarConsulta(url);
    }
  }

  realizarConsulta(url) {
    return new Promise((resolve, reject) => {
      this.consultas.getPersonajes(url).subscribe((data) => {
        // console.log('data', data);
        data.map((personaje) => this.allPersonajes.push(personaje));
        resolve(data);
      });
    });
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  } 
  
    page_size: number = 5
    page_number : number = 0
    pageSizeOptions : [5, 10, 25, 50]
}

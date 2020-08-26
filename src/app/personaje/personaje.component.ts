import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../shared/consultas.service';
import { Personaje } from 'src/app/shared/models/personaje';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss']
})
export class PersonajeComponent implements OnInit {
  criterioPersonajes: Personaje[] = [];
  busqueda;
  name;
  url = '/people/?search=';

  constructor(private consultas: ConsultasService) {}

  ngOnInit() {
    this.getPersonajes();
  }
  async getPersonajes() {

      await this.realizarConsultaCriterio();
      console.log(this.url);
    }

  realizarConsultaCriterio() {
    this.criterioPersonajes=[];
    console.log(this.busqueda);
    console.log(this.name);
    return new Promise((resolve, reject) => {

      this.consultas.getPersonajes(this.url+this.name).subscribe((data) => {
        // console.log('data', data);
        data.map((personaje) => this.criterioPersonajes.push(personaje));
        resolve(data);
      });
    });
  }
}

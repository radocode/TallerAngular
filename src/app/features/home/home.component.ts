import { TestServiceService } from './../../core/test-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private testService: TestServiceService) {

  }

  prueba: string;
  personas: any;
  hola: any;

  noticias: any;

  idCreacion: any;
  nombreCreacion: any;

  noticiaObtenida: any;

  ngOnInit() {
    // this.prueba = 'hola';

    // this.personas = [
    //   {
    //     nombre: 'pikachu',
    //     foto: 'https://i1.wp.com/www.sopitas.com/wp-content/uploads/2018/11/DrsyRkSVAAA2nez.jpg'
    //   },
    //   {
    //     nombre: 'charizard',
    //     foto: 'https://vignette.wikia.nocookie.net/es.pokemon/images/9/95/Charizard.png/revision/latest?cb=20180325003352'
    //   },
    //   {
    //     nombre: 'bulbasaur',
    //     foto: ''
    //   }
    // ];

    this.noticias = [
      {
        titulo: 'noticia 1',
        descripcion: 'descripcion 1'
      },
      {
        titulo: 'noticia 2',
        descripcion: 'descripcion 2'
      },
      {
        titulo: 'noticia 3',
        descripcion: 'descripcion 3'
      }
    ];

    this.traerPersonas();

  }

  private traerPersonas() {
    this.testService.getPersonas().subscribe((data: any[]) => {
      // console.log(data);
      this.personas = data;
    });
  }

  cambiarNombre() {
    if (this.prueba === 'angular') {
      console.log('se ha cambiado a angular');
    }

  }

  clickBotonObtenerHola() {
    this.hola = this.testService.traerHola();
  }

  borrarPersona(id: any) {
    // console.log(id);
    this.testService.deletePersona(id).subscribe((data: any) => {
      // console.log('Persona borrada', data);
      this.traerPersonas();
    });
  }

  actualizarPersona(persona: { id: number, nombre: string }) {
    const newPersona: any = {};
    newPersona.id = persona.id;
    newPersona.nombre = persona.nombre;
    // console.log(newPersona);
    this.testService.updatePersona(newPersona).subscribe((data: any) => {
      // console.log('Persona actualizada ', data);
      this.traerPersonas();
    });
  }

  crearPersona() {
    const newPersona: any = {};
    newPersona.id = this.idCreacion;
    newPersona.nombre = this.nombreCreacion;
    console.log(newPersona);
    this.testService.createPersona(newPersona).subscribe((data: any) => {
      // console.log('Persona creada ', data);
      this.traerPersonas();
    });
  }

  public onMensaje(mensaje: any) {
    console.log(mensaje);
    this.noticiaObtenida = mensaje;
  }

}

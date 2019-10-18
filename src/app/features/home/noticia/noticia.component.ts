import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: any;
  @Output() mensaje = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    console.log(this.noticia);
  }

  public cargarNoticia() {
    this.mensaje.emit(this.noticia.titulo);
  }

}

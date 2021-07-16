import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pasaje',
  templateUrl: './pasaje.component.html',
  styleUrls: ['./pasaje.component.css'],
  providers: []
})
export class PasajeComponent implements OnInit {

  @Input() datosPasaje: any;
  @Output() eventoPrecioFinal = new EventEmitter<number>();

  precioFinal: number;
  porcentaje: number;

  

  ngOnInit(): void {
  }

  calcularPrecioFinal(){
  this.precioFinal = this.datosPasaje.precio*this.porcentaje;
    this.eventoPrecioFinal.emit(this.precioFinal);
  }

}

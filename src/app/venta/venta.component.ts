import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  ventaPasForm: FormGroup;
  venta: any;
  mostrar = false;
  precioFinal: number;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initVentaPasForm();
  }

  initVentaPasForm(){
    this.ventaPasForm = this.fb.group({
      nombre: ['', Validators.required],
      fechaViaje: ['', Validators.required],
      destino: ['', Validators.required],
      precio: ['', Validators.required]
    })
  }

  guardarDatos(){
    this.venta = this.ventaPasForm.value;
  }

  onRecibe(event: number){
    this.mostrar = true;
    this.precioFinal = event;
  }

}

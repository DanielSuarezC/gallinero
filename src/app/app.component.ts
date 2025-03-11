import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gallinero';

  turno: number = 1;
  R1: number;
  B1: number ;
  R2: number ;
  B2: number ;
  totalHuevos: number = 0;
  totalRecaudo: number = 0;
  resultadosTurno: string[] = [];
  mostrarResultadosFinales: boolean = false;

  registrarTurno() {
    const recaudoTurno = (this.R1 * 600) + (this.B1 * 500) + (this.R2 * 450) + (this.B2 * 380);
    this.totalRecaudo = this.totalRecaudo + recaudoTurno;
    let huevosT1 = this.R1 + this.B1;
    let huevosT2 = this.R2 + this.B2;
    const totalHuevosTurno = this.R1 + this.B1 + this.R2 + this.B2;

    this.totalHuevos = this.totalHuevos + totalHuevosTurno;

    this.resultadosTurno.push(`Turno ${this.turno}: Recaudo: $${recaudoTurno} - Huevos: ${totalHuevosTurno}`);
    this.resultadosTurno.push(`Huevos Tipo 1: ${huevosT1} - Huevos Tipo 2: ${huevosT2}`);
    this.resultadosTurno.push(`-----------------------------------------------------`)

    if (this.turno === 2) {
      this.mostrarResultadosFinales = true;
    } else {
      this.turno++;
      this.R1 = this.B1 = this.R2 = this.B2 = 0;
    }
  }

  reiniciar() {
    this.turno = 1;
    this.R1 = this.B1 = this.R2 = this.B2 = 0;
    this.totalHuevos = 0;
    this.totalRecaudo = 0;
    this.resultadosTurno = [];
    this.mostrarResultadosFinales = false;
  }

}

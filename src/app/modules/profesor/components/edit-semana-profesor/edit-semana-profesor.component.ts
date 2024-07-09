import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfesorService } from '../../services/profesor.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SemanaAlone } from 'src/app/core/models/semanaAlone.model';

@Component({
  selector: 'app-edit-semana-profesor',
  templateUrl: './edit-semana-profesor.component.html',
  styleUrl: './edit-semana-profesor.component.css'
})
export class EditSemanaProfesorComponent implements OnInit{
  
  semanaForm: FormGroup;

  
  constructor(
    private fb: FormBuilder,
    private dialogRef: DialogRef,
    private profesorService : ProfesorService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { semana: SemanaAlone }
  ) {
    console.log('Data passed to dialog:', data);
    this.semanaForm = this.fb.group({
      semanaid: [this.data.semana.semanaid, Validators.required],
      tema: [this.data.semana.tema, Validators.required],
      numerosemana: [this.data.semana.numerosemana, Validators.required],
      descripcion: [this.data.semana.descripcion, Validators.required]
    });

  }

  ngOnInit(): void {
    
  }

  actualizarSemana(): void {
    if (this.semanaForm.valid) {
      const semanaData = this.semanaForm.getRawValue();
      const semanaDTO = {
        semanaid: semanaData.semanaid,
        tema: semanaData.tema,
        numerosemana: semanaData.numerosemana,
        descripcion: semanaData.descripcion,
      };

      console.log("Llego hasta aqui");

      this.profesorService.updateSemana(semanaDTO).subscribe((response) => {
        console.log('Semana Saved exitosamente:', response);
        this.semanaForm.reset();
      }, (error) => {
        console.error('Error al guardar semana', error);
      }
      );

    } else {
      this.snackBar.open('Por favor completa el formulario correctamente', 'Cerrar', { duration: 2000 });

    }
  }

  onCancel() {
    this.dialogRef.close();
  }

}

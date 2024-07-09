import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ProfesorService } from '../../services/profesor.service';
import { Tarea } from 'src/app/core/models/tarea.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-tarea-profesor',
  templateUrl: './edit-tarea-profesor.component.html',
  styleUrl: './edit-tarea-profesor.component.css'
})
export class EditTareaProfesorComponent {
  tareaForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditTareaProfesorComponent>,
    private profesorService: ProfesorService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { tarea: Tarea }
  ) {

  }

  ngOnInit(): void {
    this.tareaForm = this.fb.group({
      tareaid: [this.data.tarea.tareaid, Validators.required], 
      descripcion: [this.data.tarea.descripcion, Validators.required],
      nota: [this.data.tarea.nota, Validators.required]
    });
  }

  actualizarTarea(): void {
    if (this.tareaForm.valid) {
      const tareaData = this.tareaForm.getRawValue();
      const tareaDTO = {
        tareaid: tareaData.tareaid,
        descripcion: tareaData.descripcion,
        nota: tareaData.nota
      };

      console.log("Llego hasta aqui");

      this.profesorService.updateTarea(tareaDTO).subscribe((response) => {
        console.log('Semana Saved exitosamente:', response);
        this.tareaForm.reset();
      }, (error) => {
        console.error('Error al guardar tarea', error);
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

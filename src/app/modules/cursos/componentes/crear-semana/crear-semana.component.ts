import { DialogRef } from '@angular/cdk/dialog';
import { CursoSService } from './../../servicios/cursoService/curso-s.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-semana',
  templateUrl: './crear-semana.component.html',
  styleUrl: './crear-semana.component.css'
})
export class CrearSemanaComponent implements OnInit {
  semanaForm: FormGroup;
  tareas: FormGroup[] = [];
  materiales: FormGroup[] = [];
  lastCode: number | undefined;


  constructor(
    private fb: FormBuilder,
    private dialogRef: DialogRef,
    private CursoSService: CursoSService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { cursoId: string }
  ) {
    console.log('Data passed to dialog:', data);
    this.semanaForm = this.fb.group({
      idcurso: [this.data.cursoId, Validators.required],
      tema: ['', Validators.required],
      numerosemana: ['', Validators.required],
      descripcion: ['', Validators.required]
    });

  }

  ngOnInit(): void {
    this.loadLastCodigoSemana();
  }

  onSubmit() {
    if (this.semanaForm.valid) {
      // Envía los datos al servidor o realiza otras acciones necesarias
      this.dialogRef.close(this.semanaForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

  loadLastCodigoSemana(): void {
    this.CursoSService.getLastCodeSemana$().subscribe(code => {
      this.lastCode = code + 1; // Incrementa el código obtenido para usarlo como nuevo código
    }, error => {
      console.error('Error al obtener el último código de semana', error);
    });
  }

  agregarTarea(): void {
    // Asegúrate de que lastCode tenga un valor válido antes de usarlo
    if (this.lastCode !== undefined) {
      this.tareas.push(this.fb.group({
        semanaid: [{ value: this.lastCode, disabled: true }, Validators.required], // Asigna el código de semana aquí
        descripcion: ['', Validators.required],
        nota: ['', Validators.required]
      }));
    } else {
      console.error('ERROR');
    }
  }

  agregarMaterial(): void {
    // Asegúrate de que lastCode tenga un valor válido antes de usarlo
    if (this.lastCode !== undefined) {
      this.materiales.push(this.fb.group({
        semanaid: [{ value: this.lastCode, disabled: true }, Validators.required], // Asigna el código de semana aquí
        tipo: ['', Validators.required],
        descripcion: ['', Validators.required],
        url: ['', Validators.required]
      }));
    } else {
      console.error('ERROR');
    }
  }

  guardarTodo(): void {
    if (this.semanaForm.valid && this.tareas.every(tarea => tarea.valid) && this.materiales.every(material => material.valid)) {
      const semanaData = this.semanaForm.getRawValue();
      const tareasData = this.tareas.map(tarea => tarea.getRawValue());
      const materialesData = this.materiales.map(material => material.getRawValue());
      const semanaDTO = {
        idcurso: semanaData.idcurso,
        tema: semanaData.tema,
        numerosemana: semanaData.numerosemana,
        descripcion: semanaData.descripcion,
        tareas: tareasData.map(tarea => ({
          semanaid: tarea.semanaid,
          descripcion: tarea.descripcion,
          nota: tarea.nota,
        })),
        materiales: materialesData.map(material => ({
          semanaid: material.semanaid,
          tipo: material.tipo,
          descripcion: material.descripcion,
          url: material.url,
        }))
      };

      console.log("Llego hasta aqui");

      this.CursoSService.createSemana(semanaDTO).subscribe((response) => {
        console.log('Semana Saved exitosamente:', response);

        this.semanaForm.reset();
        this.tareas = [];
        this.materiales = [];
      }, (error) => {
        console.error('Error al guardar semana y tareas', error);
      }
      );

    } else {
      this.snackBar.open('Por favor completa el formulario correctamente', 'Cerrar', { duration: 2000 });

    }
  }

  cancelarTarea(index: number): void {
    this.tareas.splice(index, 1); // Elimina la tarea del arreglo
  }

  cancelarMaterial(index: number): void {
    this.materiales.splice(index, 1); // Elimina la tarea del arreglo
  }


}

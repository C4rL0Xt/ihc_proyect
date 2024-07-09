import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ProfesorService } from '../../services/profesor.service';
import { Material } from 'src/app/core/models/Material.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-material-profesor',
  templateUrl: './edit-material-profesor.component.html',
  styleUrl: './edit-material-profesor.component.css'
})
export class EditMaterialProfesorComponent {
  materialForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditMaterialProfesorComponent>,
    private profesorService: ProfesorService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { material: Material }
  ) {

  }

  ngOnInit(): void {
    this.materialForm = this.fb.group({
      materialid: [this.data.material.materialid, Validators.required], 
      tipo: [this.data.material.tipo, Validators.required], 
      descripcion: [this.data.material.descripcion, Validators.required],
      url: [this.data.material.url, Validators.required]
    });
  }

  actualizarMaterial(): void {
    if (this.materialForm.valid) {
      const materialData = this.materialForm.getRawValue();
      const materialDTO = {
        materialid: materialData.materialid,
        tipo: materialData.tipo,
        descripcion: materialData.descripcion,
        url: materialData.url
      };

      console.log("Llego hasta aqui");

      this.profesorService.updateMaterial(materialDTO).subscribe((response) => {
        console.log('Material Saved exitosamente:', response);
        this.materialForm.reset();
      }, (error) => {
        console.error('Error al guardar material', error);
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

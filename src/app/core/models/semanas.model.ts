import { Material } from "./Material.model";
import { Tarea } from "./tarea.model";

export interface Semana {
  idcurso: string;
  tema: string;
  numerosemana: number
  descripcion: string;
  tareas: Tarea[];
  materiales: Material[];
}

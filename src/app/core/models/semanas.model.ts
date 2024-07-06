import { Material } from "./Material.model";
import { Tarea } from "./tarea.model";

export interface Semana {
  tema: string;
  numerosemana: number
  descripcion: string;
  tareas: Tarea[];
  materiales: Material[];
}

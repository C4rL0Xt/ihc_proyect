import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

export interface Curso {
  nombre_curso: string;
  nombre_profesor: string;
  profesorid: number;
  foto?: SafeUrl;
  ciclo: String;
  creditos: number;
  horario: String;
  color?: String;
  id_curso: string;
}


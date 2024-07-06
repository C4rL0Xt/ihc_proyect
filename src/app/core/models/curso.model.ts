import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

export interface Curso {
  nombrecurso: String;
  nombre_profesor: String;
  profesorid: number;
  foto?: SafeUrl;
  ciclo: String;
  creditos: number;
  horario: String;
  color?: String;
}

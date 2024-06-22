import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent implements OnInit{
  user = {
    photoUrl: 'assets/images/foto.png',
    name: 'Carlos Daniel Espinoza Ramirez',
    email: 'carlos.espinoza23@unmsm.edu.pe',
    major: 'Ingenieria de Sistemas',
    year: 'Cuarto año'
  }

  constructor() {}

  ngOnInit(): void {

  }

}

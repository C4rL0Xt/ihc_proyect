import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { trigger, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ProfilService } from 'src/app/shared/services/profile-service/profil.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AuthPageComponent implements OnInit {

  errorSesion: boolean = false;


  errorSession: boolean = false;
  formLogin: FormGroup = new FormGroup({});



  passwordFieldType: string = 'password';

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private profileService: ProfilService
  ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  login(): void {
    if (this.formLogin.invalid) {
      return;
    }

    const { correo, password } = this.formLogin.value;
    console.log(correo, password)
    this.authService.login(correo, password).subscribe(
      (response: any) => {
        console.log(response);
        console.log('token: ', response.token);
        localStorage.setItem('token', response.token);
        localStorage.setItem('email', correo);
        this.loadRolUser();
        if (localStorage.getItem('role') === 'PROFESOR_ROL') {
          this.router.navigate(['/prof']);
        } else if (localStorage.getItem('role') === 'ALUMNO_ROL') {
          this.router.navigate(['/home']);
        }

      },
      (error) => {
        console.error('Error de login', error);
        this.errorSession = true;
      }
    );
  }


  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  loadRolUser(): void {
    this.profileService.getRol().subscribe(role => {
      localStorage.setItem('role', role);
      console.log('Rol de usuario: ', role);
    });
  }


}

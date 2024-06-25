import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { trigger, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

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
  data = {
    email: 'carlos.espinoza@unmsm.edu.pe',
    password: '12345'
  };
  errorSession: boolean = false;
  formLogin: FormGroup = new FormGroup({});


  passwordFieldType: string = 'password';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
    });
  }

  login(): void {
    const { email, password } = this.formLogin.value;
    if (email === this.data.email && password === this.data.password) {
      this.router.navigate(['/home']);
    } else {
      this.errorSession = true;
    }
  }


  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  irAHome(): void {
    this.router.navigate(['/home']);
  }
}

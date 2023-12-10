import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServices } from '../../services/auth.services';
import { IUser } from '../../types/user.interface';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private authService: AuthServices,
    private router: Router,
    private msgService: MessageService
  ) {}

  loginForm = new FormGroup({
    email: new FormControl('iavan@mail.ru', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('admin1Sq', [
      Validators.required,
      Validators.pattern('^(?=.*d)(?=.*[A-Z])(?=.*[a-z]).{8,}$'),
    ]),
  });

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }

  loginUser() {
    const { email, password } = this.loginForm.value;

    this.authService.getUserByEmail(email).subscribe((data: IUser[]) => {
      if (data.length > 0 && data[0].password === password) {
        localStorage.setItem('email', email);
        this.router.navigate(['/products']);
      } else {
        this.msgService.add({
          severity: 'error',
          summary: 'ИДИ',
          detail: 'нахуй за своим email',
          life: 2000,
        });
      }
      //можно было добавить next error complite, но с json сервером нужно копаться
    });
  }
}

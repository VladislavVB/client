import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServices } from '../../services/auth.services';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IUser } from '../../types/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(
    private authService: AuthServices,
    private router: Router,
    private msgService: MessageService
  ) {}

  registerForm = new FormGroup({
    fullName: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*d)(?=.*[A-Z])(?=.*[a-z]).{8,}$'),
    ]),
  });

  get fullName() {
    return this.registerForm.controls['fullName'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  registerUser() {
    this.authService
      .registerUser(this.registerForm.value as IUser)
      .subscribe((data) => {
        this.msgService.add({
          severity: 'success',
          summary: 'ТЫ',
          detail: 'зареган',
          life: 2000,
        });
        this.router.navigate(['login']);
      });
    //можно было добавить next error complite, но с json сервером нужно копаться
  }
}

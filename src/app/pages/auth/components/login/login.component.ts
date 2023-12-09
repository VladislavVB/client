import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
// import { Router } from '@angular/router';
// import { MessageService } from 'primeng/api';
// import { AuthServices } from '../../services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }

  loginUser() {
    console.log(1);

    // const { email, password } = this.loginForm.value;
    // this.authServices.getUserByEmail(email as string).subscribe(
    //   response => {
    //     if (response.length > 0 && response[0].password === password) {
    //       sessionStorage.setItem('email', email as string);
    //       this.router.navigate(['/home']);
    //     } else {
    //       this.msgService.add({ severity: 'error', summary: 'Error', detail: 'email or password is wrong' });
    //     }
    //   },
    //   error => {
    //     this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
    //   }

    // )
  }
}

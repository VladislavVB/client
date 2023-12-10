import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServices } from '../../services/auth.services';
import { IUser } from '../../types/user.interface';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnDestroy {
  constructor(
    private authService: AuthServices,
    private router: Router,
    private msgService: MessageService
  ) {}

  loginUserSubscription$: Subject<IUser> = new Subject<IUser>();

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

  clear() {
    this.loginForm.setValue({
      email: '',
      password: '',
    });
  }

  loginUser() {
    const { email, password } = this.loginForm.value;

    this.authService
      .getUserByEmail(email)
      .pipe(takeUntil(this.loginUserSubscription$))
      .subscribe((data: IUser[]) => {
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
  ngOnDestroy(): void {
    this.loginUserSubscription$.unsubscribe();
  }
}

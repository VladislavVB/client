import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {
  constructor(private location: Location, private router: Router) {}
  logOut() {
    localStorage.removeItem('email');
    this.router.navigate(['login']);
  }
  goBack() {
    this.location.back();
  }
}

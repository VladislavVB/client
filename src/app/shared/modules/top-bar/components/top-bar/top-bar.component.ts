import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ILink } from '../../types/link';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {
  constructor(private location: Location, public router: Router) {}

  links: ILink[] = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Products',
      link: '/products',
    },
    {
      name: 'Showroom',
      link: '/showroom',
    },
  ];

  logOut() {
    localStorage.removeItem('email');
    this.router.navigate(['login']);
  }
  goBack() {
    this.location.back();
  }
}

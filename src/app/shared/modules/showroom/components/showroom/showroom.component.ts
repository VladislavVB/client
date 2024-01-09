import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ShowroomServices } from '../../services/showroom.services';
import { Observable } from 'rxjs';
import { IPhoto } from '../../types/photo';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowroomComponent implements OnInit {
  images: [
    {
      itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg';
      thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg';
      alt: 'Description for Image 1';
      title: 'Title 1';
    }
  ];

  responsiveOptions: [
    {
      breakpoint: '1024px';
      numVisible: 5;
    },
    {
      breakpoint: '768px';
      numVisible: 3;
    },
    {
      breakpoint: '560px';
      numVisible: 1;
    }
  ];

  photos$: Observable<IPhoto[]>

  constructor(private showroomService: ShowroomServices) {
    this.photos$ = this.showroomService.getPhotos()
  }

  // ngOnInit() {}
  ngOnInit() {
    console.log(11);

    this.showroomService.getPhotos();

    // this.photoService.getImages().then((images) => (this.images = images));
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];
  }
}

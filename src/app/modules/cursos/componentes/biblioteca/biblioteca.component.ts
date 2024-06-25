import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrl: './biblioteca.component.css'
})
export class BibliotecaComponent implements OnInit{
  images1: string[] = ['assets/images/b1.jpg', 'assets/images/b2.jpg','assets/images/b4.jpg','assets/images/b5.jpg'];
  images2: string[] = ['assets/images/f1.jpg', 'assets/images/f2.jpg','assets/images/f3.jpg'];
  currentImage1: string;
  currentImage2: string;
  nextImage1: string;
  nextImage2: string;
  animateImage1: boolean = false;
  animateImage2: boolean = false;
  imageIndex1: number = 0;
  imageIndex2: number = 0;

  constructor() {
    this.currentImage1 = this.images1[this.imageIndex1];
    this.currentImage2 = this.images2[this.imageIndex2];
    this.nextImage1 = this.images1[(this.imageIndex1 + 1) % this.images1.length];
    this.nextImage2 = this.images2[(this.imageIndex2 + 1) % this.images2.length];
  }

  ngOnInit(): void {
    setInterval(() => {
      this.animateImage1 = true;
      this.animateImage2 = true;

      setTimeout(() => {
        this.imageIndex1 = (this.imageIndex1 + 1) % this.images1.length;
        this.imageIndex2 = (this.imageIndex2 + 1) % this.images2.length;
        this.currentImage1 = this.nextImage1;
        this.currentImage2 = this.nextImage2;
        this.nextImage1 = this.images1[(this.imageIndex1 + 1) % this.images1.length];
        this.nextImage2 = this.images2[(this.imageIndex2 + 1) % this.images2.length];
        this.animateImage1 = false;
        this.animateImage2 = false;
      }, 6000); 
    }, 5000);
  }
}

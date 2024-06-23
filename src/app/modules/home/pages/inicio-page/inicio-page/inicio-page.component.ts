import { AfterViewInit, Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';


@Component({
  selector: 'app-inicio-page',
  templateUrl: './inicio-page.component.html',
  styleUrl: './inicio-page.component.css'
})
export class InicioPageComponent implements AfterViewInit {
  constructor() { }


  ngAfterViewInit(): void {
    anime({
      targets: '#greeting',
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 2000,
      easing: 'easeOutElastic(1, .8)'
    });

    anime({
      targets: '.content-grid mat-grid-tile',
      opacity: [0, 1],
      translateY: [50, 0],
      delay: anime.stagger(200),
      duration: 1000,
      easing: 'easeOutCubic'
    });
  }


}

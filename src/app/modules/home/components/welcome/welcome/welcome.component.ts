import { ElementRef, AfterViewInit, Component, Renderer2 } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.animateBackground();
    this.animateText();
  }

  animateBackground() {
    anime({
      targets: '.background-shape',
      translateX: () => anime.random(-500, 500),
      translateY: () => anime.random(-200, 200),
      scale: () => anime.random(0.5, 1.5),
      rotate: () => anime.random(-360, 360),
      easing: 'easeInOutQuad',
      duration: 5000,
      direction: 'alternate',
      loop: true
    });
  }

  animateText() {
    const textWrapper = this.el.nativeElement.querySelector('.welcome-text');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
      .add({
        targets: '.welcome-text .letter',
        translateY: [100, 0],
        opacity: [0, 1],
        easing: "easeOutElastic(1, .5)",
        duration: 1000,
        delay: (el, i) => 50 * i
      })
      .add({
        targets: '.welcome-text .letter',
        translateY: [0, -100],
        opacity: [1, 0],
        easing: "easeInElastic(1, .5)",
        duration: 1000,
        delay: (el, i) => 50 * i
      });
  }

}

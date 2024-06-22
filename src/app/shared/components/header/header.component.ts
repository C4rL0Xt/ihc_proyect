import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  selectedOption: string = 'home';

  selectOption(option: string) {
    this.selectedOption = option;
  }

}

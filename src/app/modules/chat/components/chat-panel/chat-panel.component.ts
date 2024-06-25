import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-chat-panel',
  templateUrl: './chat-panel.component.html',
  styleUrl: './chat-panel.component.css',
  animations: [
    trigger('menuAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('0.3s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('0.3s ease-in-out', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class ChatPanelComponent {
  isMenuOpen = false;
  newMessageText = '';
  isChatOpen = true;
  messages = [
    { text: 'Hello! How are you?', sent: false, time: '10:30 AM' },
    { text: 'I\'m good, thanks! How about you?', sent: true, time: '10:31 AM' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  menuAction(action: string) {
    console.log(`${action} selected`);
    this.isMenuOpen = false;
    this.isChatOpen = false;
  }

  sendMessage() {
    if (this.newMessageText.trim()) {
      const currentTime = new Date();
      const timeString = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
      this.messages.push({
        text: this.newMessageText,
        sent: true,
        time: timeString
      });
      this.newMessageText = '';
    }
  }

  attachFile() {
    // Add your attach file logic here
  }

  openEmojiPicker() {
    // Add your emoji picker logic here
  }
}

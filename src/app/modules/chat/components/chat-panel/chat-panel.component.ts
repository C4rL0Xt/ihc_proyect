import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ChatService, Contact } from '../../service/chat.service';
import { EmojiEvent } from '@ctrl/ngx-emoji-mart/ngx-emoji';

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
export class ChatPanelComponent implements OnInit {
  isMenuOpen = false;
  newMessageText = '';
  isChatOpen = false;
  isEmojiPickerOpen = false;

  currentContact: Contact | null = null;
  messages = [
    { text: 'Hola, como estas?', sent: false, time: '10:30 AM', fileUrl: '' },
    { text: 'Bien, gracias! Tu que tal?', sent: true, time: '10:31 AM', fileUrl: '' }
  ];

  constructor(private chatService: ChatService) {

  }

  ngOnInit() {
    this.chatService.currentContact.subscribe(contact => {
      this.currentContact = contact;
      this.isChatOpen = !!contact;
    });
  }

  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef<HTMLInputElement>;

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
        time: timeString,
        fileUrl: ''
      });
      this.newMessageText = '';
      this.isEmojiPickerOpen = false;
    }
  }

  attachFile(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const currentTime = new Date();
        const timeString = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
        this.messages.push({
          text: `File: ${file.name}`,
          sent: true,
          time: timeString,
          fileUrl: e.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  }
  toggleEmojiPicker() {
    this.isEmojiPickerOpen = !this.isEmojiPickerOpen;
  }


  addEmoji(event: EmojiEvent) {
    this.newMessageText += event.emoji.native;
  }
}

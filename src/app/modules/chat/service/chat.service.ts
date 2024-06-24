import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private messages: { text: string, read: boolean, emoji?: string }[] = [
    { text: 'Hello!', read: true },
    { text: 'How are you?', read: false, emoji: '😊' },
  ];

  getMessages() {
    return this.messages;
  }

  addMessage(message: { text: string, read: boolean, emoji?: string }) {
    this.messages.push(message);
  }

  markAsRead(index: number) {
    if (this.messages[index]) {
      this.messages[index].read = true;
    }
  }
}

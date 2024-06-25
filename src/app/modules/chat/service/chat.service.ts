import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Message {
  content: string;
  timestamp: Date;
  sender: string;
  fileUrl?: string;
}

export interface Contact {
  firstName: string;
  lastName: string;
  lastMessage: Message;
  messageHistory: Message[];
}



@Injectable({
  providedIn: 'root'
})
export class ChatService {

  createMessage = (content: string, date: string, sender: string): Message => ({
    content,
    timestamp: new Date(date),
    sender,
  });

  fakeMessages: Message[] = [
    this.createMessage('Hola, ¿cómo estás?', '2024-06-23T14:30:00', 'John Doe'),
    this.createMessage('No olvides revisar el material de estudio.', '2024-06-23T15:00:00', 'Jane Smith'),
    this.createMessage('¿Puedes ayudarme con el ejercicio 3?', '2024-06-23T15:30:00', 'Alice Johnson'),
    this.createMessage('Claro, ¿qué necesitas?', '2024-06-23T16:00:00', 'Bob Brown'),
    this.createMessage('Gracias por tu ayuda.', '2024-06-23T16:30:00', 'Carlos White'),
    this.createMessage('De nada, ¡buena suerte!', '2024-06-23T17:00:00', 'Diana Black'),
    this.createMessage('¿Te gustaría unirte a nuestro grupo de estudio?', '2024-06-23T17:30:00', 'Eva Green'),
    this.createMessage('Sí, me encantaría.', '2024-06-23T18:00:00', 'Frank Blue'),
    this.createMessage('Perfecto, nos vemos mañana.', '2024-06-23T18:30:00', 'Grace Red'),
    this.createMessage('Hasta mañana.', '2024-06-23T19:00:00', 'Hank Purple'),
  ];

  messageHistories = {
    'Jane Smith': [
      this.createMessage('Hola, Jane.', '2024-06-23T14:30:00', 'John Doe'),
      this.createMessage('Hola, John. No olvides revisar el material de estudio.', '2024-06-23T15:00:00', 'Jane Smith'),
    ],
    'Alice Johnson': [
      this.createMessage('Hola, Alice. ¿Puedes ayudarme con el ejercicio 3?', '2024-06-23T15:30:00', 'Alice Johnson'),
      this.createMessage('Claro, ¿qué necesitas?', '2024-06-23T16:00:00', 'John Doe'),
    ],
    'Bob Brown': [
      this.createMessage('Hola, Bob.', '2024-06-23T16:00:00', 'John Doe'),
      this.createMessage('Gracias por tu ayuda.', '2024-06-23T16:30:00', 'Bob Brown'),
    ],
    'Carlos White': [
      this.createMessage('Hola, Carlos.', '2024-06-23T16:30:00', 'John Doe'),
      this.createMessage('De nada, ¡buena suerte!', '2024-06-23T17:00:00', 'Carlos White'),
    ],
    'Diana Black': [
      this.createMessage('Hola, Diana.', '2024-06-23T17:00:00', 'John Doe'),
      this.createMessage('¿Te gustaría unirte a nuestro grupo de estudio?', '2024-06-23T17:30:00', 'Diana Black'),
    ],
    'Eva Green': [
      this.createMessage('Hola, Eva.', '2024-06-23T17:30:00', 'John Doe'),
      this.createMessage('Sí, me encantaría.', '2024-06-23T18:00:00', 'Eva Green'),
    ],
    'Frank Blue': [
      this.createMessage('Hola, Frank.', '2024-06-23T18:00:00', 'John Doe'),
      this.createMessage('Perfecto, nos vemos mañana.', '2024-06-23T18:30:00', 'Frank Blue'),
    ],
    'Grace Red': [
      this.createMessage('Hola, Grace.', '2024-06-23T18:30:00', 'John Doe'),
      this.createMessage('Hasta mañana.', '2024-06-23T19:00:00', 'Grace Red'),
    ],
    'Hank Purple': [
      this.createMessage('Hola, Hank.', '2024-06-23T19:00:00', 'John Doe'),
      this.createMessage('Hasta mañana.', '2024-06-23T19:30:00', 'Hank Purple'),
    ],
  };

  fakeContacts: Contact[] = [
    {
      firstName: 'Melani',
      lastName: 'Laveriano',
      lastMessage: this.fakeMessages[0],
      messageHistory: [],
    },
    {
      firstName: 'Marina',
      lastName: 'Piscoya',
      lastMessage: this.fakeMessages[1],
      messageHistory: this.messageHistories['Jane Smith'],
    },
    {
      firstName: 'Aaron',
      lastName: 'Olivera',
      lastMessage: this.fakeMessages[2],
      messageHistory: this.messageHistories['Alice Johnson'],
    },
    {
      firstName: 'Miguel',
      lastName: 'Ignacio',
      lastMessage: this.fakeMessages[3],
      messageHistory: this.messageHistories['Bob Brown'],
    },
    {
      firstName: 'Carlos',
      lastName: 'White',
      lastMessage: this.fakeMessages[4],
      messageHistory: this.messageHistories['Carlos White'],
    },
    {
      firstName: 'Diana',
      lastName: 'Prado',
      lastMessage: this.fakeMessages[5],
      messageHistory: this.messageHistories['Diana Black'],
    },
    {
      firstName: 'Eva',
      lastName: 'Ayllon',
      lastMessage: this.fakeMessages[6],
      messageHistory: this.messageHistories['Eva Green'],
    },
    {
      firstName: 'Frank',
      lastName: 'Blue',
      lastMessage: this.fakeMessages[7],
      messageHistory: this.messageHistories['Frank Blue'],
    },
    {
      firstName: 'Grace',
      lastName: 'Red',
      lastMessage: this.fakeMessages[8],
      messageHistory: this.messageHistories['Grace Red'],
    },
    {
      firstName: 'Hank',
      lastName: 'Purple',
      lastMessage: this.fakeMessages[9],
      messageHistory: this.messageHistories['Hank Purple'],
    },
  ];

  private selectedContactSource = new BehaviorSubject<Contact | null>(null);
  currentContact = this.selectedContactSource.asObservable();

  constructor() { }

  changeContact(contact: Contact) {
    this.selectedContactSource.next(contact);
  }


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

  getContacts(): Contact[] {
    return this.fakeContacts;
  }
}

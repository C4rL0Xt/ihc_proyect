import { Component } from '@angular/core';
import { CoursesServiceService, Course } from 'src/app/modules/cursos/servicios/courses-service.service';
import { ChatService, Contact } from '../../service/chat.service';

@Component({
  selector: 'app-chat-contact',
  templateUrl: './chat-contact.component.html',
  styleUrl: './chat-contact.component.css'
})
export class ChatContactComponent {
  courses: Course[] = [];
  contacts: Contact[] = [];
  randomColors: String[] = [];

  constructor(private contact: ChatService) { }

  ngOnInit(): void {
    this.contacts = this.contact.getContacts();
  }

  selectContact(contact: Contact) {
    this.contact.changeContact(contact);
    console.log('Contact selected:', contact);
  }
}
